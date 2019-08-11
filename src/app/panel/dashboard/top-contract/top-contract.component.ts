import {AfterViewInit, Component, OnInit} from '@angular/core';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '@app/panel/service/contract.service';
import * as moment from 'moment';

@Component({
  selector: 'app-top-contract',
  templateUrl: './top-contract.component.html',
  styleUrls: ['./top-contract.component.scss']
})
export class TopContractComponent implements OnInit, AfterViewInit {

  data: any;
  lineData: any;
  options: any;
  formGroup: FormGroup;

  constructor(
    private contractService: ContractService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Top Contracts' }]);
    this.formGroup = new FormGroup({
      start: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
      selectedYear: new FormControl(),
      selectedMonth: new FormControl(),
      selectedWeek: new FormControl(),
      weekStart: new FormControl(),
    });

    this.years = this.getYears();
    this.months = this.getMonths();
    this.weeks = this.getWeeks();

    this.lineChart();
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.formGroup.get("weekStart").setValue("m");
      this.formGroup.get("start").setValue(moment().startOf('day').add(-1, 'months').toDate());
      this.formGroup.get("end").setValue(moment().startOf('day').toDate());
      this.search();
    }, 0);

  }

  public search() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.contractService.getTopContracts({
        start: this.formGroup.get("start").value,
        end: this.formGroup.get("end").value
      }).subscribe((value) => {
        this.chartStartDate = this.formGroup.get("start").value;
        this.chartEndDate = this.formGroup.get("end").value;
        let dataSets = {};
        this.formGroup.enable();
        const labels = [];
        const data = [];
        let total = 0;
        let original: any = [];
        if (value && Object.keys(value).length) {

          Object.keys(value).forEach(key => {
            let _data = []
            original.push(...value[key]);
            value[key].forEach((element) => {
              labels.push(moment(element.date));
              _data.push(element.volume);
              total += element.volume;
            });
            dataSets[key] = _data;
          });
        }
        this.lineChart(
          'Contract volumes IDS: ' + this.commaNumber(total),
          labels,
          dataSets,
          original
        );
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  chartStartDate: Date;
  chartEndDate: Date;

  public clear() {
    this.formGroup.reset();
  }

  public commaNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  lineChart(label = 'Contract volumes IDs', labels = [], dataSets = {}, original = []) {
    let _datasets = [], __data = [];

    Object.keys(dataSets).forEach(key => {
      let data = dataSets[key];
      if (data && data.length && data.length > __data.length) __data = data;
      let _ds = {
        label: key,
        data,
        fill: false,
        borderColor: this.getRandomColor(),
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: 'white',
        pointHoverBorderColor: 'white',
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 10,
      }
      _datasets.push(_ds);
    });


    this.lineData = {
      labels,
      datasets: _datasets
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        display: __data && __data.length
      },
      title: {
        display: true,
        text: label
      },
      elements: {
        point: {
          pointStyle: 'circle'
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Volume'
          },
          ticks: {
            display: __data && __data.length,
            callback: (value) => {
              return '$' + this.commaNumber(value);
            }
          }
        }],
        xAxes: [{
          display: true,
          scaleLabel: {
            display: !__data || !__data.length,
            labelString: 'Month'
          },
          ticks: {
            display: __data && __data.length,
            callback: (value) => {
              return moment(value).format('MMM D');
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          title: (tooltipItem) => {
            return moment(labels[tooltipItem.index]).format('ddd, D MMM YYYY');
          },
          label: (tooltipItem) => {
            return ' Volume: $' + this.commaNumber(tooltipItem.yLabel) +
              ', Count: ' + original[tooltipItem.index].count;
          }
        }
      }
    };
  }

  years: number[] = [];
  getYears(): number[] {
    let result: number[] = [], min = moment().year() - 10, max = moment().year();
    for (let i = min; i < max + 1; i++) {
      result.push(i);
    }
    return result;
  }

  months: number[] = [];
  getMonths(): number[] {
    let result: number[] = [], min = 1, max = 12;
    for (let i = min; i < max + 1; i++) {
      result.push(i);
    }
    return result;
  }

  thisMonth() {
    this.formGroup.get("selectedYear").setValue(moment().year());
    this.formGroup.get("selectedMonth").setValue(moment().month() + 1);
    this.weeks = this.getWeeks();
    this.onMonthChange(moment().month() + 1);
    this.search();
  }

  lastMonth() {
    this.formGroup.get("selectedYear").setValue(moment().year());
    this.formGroup.get("selectedMonth").setValue(moment().month());
    this.weeks = this.getWeeks();
    this.onMonthChange(moment().month());
    this.search();
  }

  showFromPreviousMonth: boolean = true;

  getWeek(date: moment.Moment): IWeek {

    let w: moment.Moment = this.startOfWeek(date);
    let n: number = w.week();
    return {
      Text: `CK${n} (${w.format('DD.MM')}-${moment(w).add(6, 'days').format('DD.MM')})`,
      WeekNumber: n,
      Start: w
    };
  }

  weeks: IWeek[] = []
  getWeeks(): IWeek[] {
    let result: IWeek[] = [];
    if (this.formGroup.get("selectedYear").value != null && this.formGroup.get("selectedMonth").value != null) {
      let selectedDate = moment([+this.formGroup.get("selectedYear").value, +this.formGroup.get("selectedMonth").value - 1]);
      let endOfMonth = moment(selectedDate).endOf('month');

      if (selectedDate.isValid) {
        if (this.startOfWeek(selectedDate).month() == selectedDate.month() || this.showFromPreviousMonth)
          result.push(this.getWeek(selectedDate));

        while (selectedDate.add(7, 'days').diff(endOfMonth) < 0) {
          if (this.startOfWeek(selectedDate).month() == selectedDate.month() || this.showFromPreviousMonth)
            result.push(this.getWeek(selectedDate));
        }
      }
    }
    return result;
  }

  startOfWeek(date: moment.Moment): moment.Moment {
    let w: moment.Moment;
    if (this.formGroup && this.formGroup.get("weekStart").value == "s") {
      w = moment(date).startOf('week');
    } else {
      w = moment(date).startOf('isoWeek');
    }
    return w;
  }

  thisWeek() {
    this.weeks = this.getWeeks();
    let currentDate = moment();
    this.setWeekDate(currentDate);
    this.onWeekChange(this.getWeek(currentDate).Start.valueOf());
    this.search();
  }

  lastWeek() {
    this.weeks = this.getWeeks();
    let currentDate = moment().add(-7, 'days');
    this.setWeekDate(currentDate);
    this.onWeekChange(this.getWeek(currentDate).Start.valueOf());
    this.search();
  }

  setWeekDate(date: moment.Moment) {
    this.formGroup.get("selectedYear").setValue(date.year());
    this.formGroup.get("selectedMonth").setValue(date.month() + 1);
    this.formGroup.get("selectedWeek").setValue(this.getWeek(date).Start.valueOf());
  }

  onYearChange(value) {
    this.weeks = this.getWeeks();
    if (this.formGroup.get("selectedMonth").value != null && this.formGroup.get("selectedMonth").value != "") {
      let selectedDate = moment([+value, +this.formGroup.get("selectedMonth").value - 1]);
      this.formGroup.get("selectedWeek").setValue(null);

      this.formGroup.get("start").setValue(selectedDate.toDate());;
      this.formGroup.get("end").setValue(moment(selectedDate).add(1, 'months').add(-1, 'days').toDate());
    }
  }

  onMonthChange(value) {
    this.weeks = this.getWeeks();
    if (this.formGroup.get("selectedYear").value != null && this.formGroup.get("selectedYear").value != "") {
      let selectedDate = moment([+this.formGroup.get("selectedYear").value, +value - 1]);
      this.formGroup.get("selectedWeek").setValue(null);

      this.formGroup.get("start").setValue(selectedDate.toDate());
      this.formGroup.get("end").setValue(moment(selectedDate).add(1, 'months').add(-1, 'days').toDate());
    }
  }

  onWeekChange(value) {
    if (!isNaN(value)) {
      let selectedDate = moment(+value);
      this.formGroup.get("start").setValue(selectedDate.toDate());;
      this.formGroup.get("end").setValue(moment(selectedDate).add(6, 'days').toDate());
    }
  }

  onWeekStartChange(value){
    this.weeks = this.getWeeks();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

export interface IWeek {
  WeekNumber: number;
  Start: moment.Moment;
  Text: string;
}
