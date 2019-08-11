import { Component, Input } from '@angular/core';
import { ITerminalRiskFilter } from '@utils/interfaces';
import { TerminalRiskFiltersService } from '@app/panel/service/terminal-risk-filters.service';
import { BsModalService } from 'ngx-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-terminal-risk-filter-list',
  templateUrl: './terminal-risk-filter-list.component.html',
  styleUrls: ['./terminal-risk-filter-list.component.scss']
})
export class TerminalRiskFilterListComponent {

  keys = Object.keys;
  sortedFilters: ITerminalRiskFilter[];
  @Input()
  set filters(filters: ITerminalRiskFilter[]) {
    this.sortedFilters = filters;
    this.sortedFilters.sort(function(filterA, filterB) {
      return filterA.position - filterB.position;
    });
  }
  @Input() terminalId: number;
  notificationDialog;

  constructor(private terminalRiskFiltersService: TerminalRiskFiltersService,
              private dialogService: BsModalService
  ) { }

  drop(event: CdkDragDrop<ITerminalRiskFilter[]>) {
    moveItemInArray(this.sortedFilters, event.previousIndex, event.currentIndex);
    const newPositionsData: ITerminalRiskFilter[] = [];
    this.sortedFilters.forEach((filter, index) => {
      if (filter.position !== index) {
        filter.position = index;
        newPositionsData.push(filter);
      }
    });
    this.terminalRiskFiltersService.changeOrder(this.terminalId, newPositionsData).subscribe((result) => {
    }, (error) => {
    });
  }

  public removeFilter(event: MouseEvent, elementRef, filter: ITerminalRiskFilter) {
    event.stopPropagation();
    this.notificationDialog = this.dialogService.show(elementRef);
    this.notificationDialog.filters = [filter];
  }

  public copyFilter(event: MouseEvent, filter: ITerminalRiskFilter) {
    event.stopPropagation();

    this.terminalRiskFiltersService.add(filter).subscribe((addedFilter: ITerminalRiskFilter) => {
      this.sortedFilters.push(addedFilter);
    }, (error) => {
    });
  }

  public removeSelectedFilters(elementRef) {
    this.notificationDialog = this.dialogService.show(elementRef);
    this.notificationDialog.filters = [];
    this.sortedFilters.forEach(filter => {
      if (filter.selected) {
        this.notificationDialog.filters.push(filter);
      }
    });
  }

  public isSelectedFilters(): boolean {
    return this.sortedFilters.filter(filter => filter.selected).length > 0;
  }

  public confirmDeleteFilters(result: boolean) {
    if (!result) {
      this.notificationDialog.hide();
      return;
    }

    const filtersIds = [];
    this.notificationDialog.filters.forEach(filter => {
      filtersIds.push(filter.id);
    });
    this.terminalRiskFiltersService.delete(filtersIds).subscribe(() => {
      this.sortedFilters = this.sortedFilters.filter(function(filter) {
        return filtersIds.indexOf(filter.id) < 0;
      });

      this.notificationDialog.hide();
    }, (error) => {
    });
  }

  public selectAllFilters() {
    this.sortedFilters.forEach(filter => filter.selected = true);
  }
}
