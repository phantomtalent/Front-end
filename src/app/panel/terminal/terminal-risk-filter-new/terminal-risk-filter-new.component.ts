import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITerminalRiskFilter, TerminalRiskFilterFormSchemeFieldType } from '@utils/interfaces';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TerminalRiskFiltersService } from '@app/panel/service/terminal-risk-filters.service';
import { TerminalRiskFilter } from '@utils/models';
import { TerminalRiskFilterType } from '@app/panel/domain/terminal-risk-filter-type';
import { TerminalRiskFilterType2SettingMapping } from '@app/panel/domain/terminal-risk-filter-settings';

@Component({
  selector: 'app-terminal-risk-filter-new',
  templateUrl: './terminal-risk-filter-new.component.html',
  styleUrls: ['./terminal-risk-filter-new.component.scss']
})
export class TerminalRiskFilterNewComponent extends FormBaseComponent implements OnInit {

  keys = Object.keys;
  filterTypes = TerminalRiskFilterType;
  formFieldTypes = TerminalRiskFilterFormSchemeFieldType;
  filter: ITerminalRiskFilter = new TerminalRiskFilter();
  valueExists = false;

  formGroup = new FormGroup({
    filter_class: new FormControl('', [Validators.required]),
  });

  constructor(private terminalRiskFiltersService: TerminalRiskFiltersService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([
      { name: 'Configuration', slug: '/panel/resellers' },
      { name: 'Terminals', slug: '/panel/terminals' },
      { name: 'Terminal edit', slug: `/panel/terminals/edit/${this.route.snapshot.params.terminalId}` },
      { name: 'New risk filter' }
      ]);
  }

  typeChanged(event: Event) {
    this.filter.filter_class = TerminalRiskFilterType[(event.target as HTMLSelectElement).value];
    this.filter.filter_settings = new TerminalRiskFilterType2SettingMapping[(event.target as HTMLSelectElement).value]();
    const controls = {
      filter_class: new FormControl((event.target as HTMLSelectElement).value, [Validators.required]),
    };

    this.keys(this.filter.filter_settings).forEach(field => {
      controls[field] = new FormControl(
        this.filter.filter_settings[field].type === TerminalRiskFilterFormSchemeFieldType.Checkbox ? false : '',
        [Validators.required]
      );
    });

    this.formGroup = new FormGroup(controls);
  }

  clear() {
    this.keys(this.filter.filter_settings).forEach(field => {
      this.formGroup.get(field).reset(null);
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.filter.filter_class = this.formGroup.get('filter_class').value;
      this.keys(this.filter.filter_settings).forEach(field => {
        this.filter.filter_settings[field].value = this.formGroup.get(field).value;
      });
      this.filter.terminal_id = this.route.snapshot.params.terminalId;
      this.terminalRiskFiltersService.add(this.filter).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'terminals', 'edit', this.route.snapshot.params.terminalId]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'TERMINAL_RISK_FILTER_EXISTS') {
      this.valueExists = true;
    }
  }
}
