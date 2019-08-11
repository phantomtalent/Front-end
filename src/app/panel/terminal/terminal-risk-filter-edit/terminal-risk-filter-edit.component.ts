import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITerminalRiskFilter, TerminalRiskFilterFormSchemeFieldType } from '@utils/interfaces';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TerminalRiskFiltersService } from '@app/panel/service/terminal-risk-filters.service';

@Component({
  selector: 'app-terminal-risk-filter-edit',
  templateUrl: './terminal-risk-filter-edit.component.html',
  styleUrls: ['./terminal-risk-filter-edit.component.scss']
})
export class TerminalRiskFilterEditComponent extends FormBaseComponent implements OnInit {

  keys = Object.keys;
  formFieldTypes = TerminalRiskFilterFormSchemeFieldType;
  filter: ITerminalRiskFilter;
  valueExists = false;

  constructor(private terminalRiskFiltersService: TerminalRiskFiltersService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.filter = this.route.snapshot.data['filter'];
    if (!this.filter) {
      this.router.navigate(['panel', 'terminals']);
    }

    this.breadcrumbService.setItems([
      { name: 'Configuration', slug: '/panel/resellers' },
      { name: 'Terminals', slug: '/panel/terminals' },
      { name: 'Terminal edit', slug: `/panel/terminals/edit/${this.filter.terminal_id}` },
      { name: 'Risk Filter edit' }
      ]);

    const controls = {};
    this.keys(this.filter.filter_settings).forEach(field_name => {
      controls[field_name] = new FormControl(this.filter.filter_settings[field_name].value, [Validators.required]);
    });

    this.formGroup = new FormGroup(controls);
  }

  clear() {
    this.keys(this.filter.filter_settings).forEach(field_name => {
      this.formGroup.get(field_name).reset(null);
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.keys(this.filter.filter_settings).forEach(field => {
        this.filter.filter_settings[field].value = this.formGroup.get(field).value;
      });
      this.terminalRiskFiltersService.save(this.filter.id, this.filter).subscribe(() => {
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
