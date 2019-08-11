import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TerminalRiskFiltersService } from '@app/panel/service/terminal-risk-filters.service';

@Component({
  selector: 'app-terminal-risk-filter-copy',
  templateUrl: './terminal-risk-filter-copy.component.html',
  styleUrls: ['./terminal-risk-filter-copy.component.scss']
})
export class TerminalRiskFilterCopyComponent extends FormBaseComponent implements OnInit {

  keys = Object.keys;
  terminals: {id: any, text: string}[] = [];
  valueExists = false;

  constructor(private terminalRiskFiltersService: TerminalRiskFiltersService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.route.snapshot.data['terminals'].forEach(terminal => this.terminals.push({id: terminal.id, text: terminal.name}));
    if (!this.terminals) {
      this.router.navigate(['panel', 'terminals', 'edit', this.route.snapshot.params['terminalId']]);
    }

    this.breadcrumbService.setItems([
      { name: 'Configuration', slug: '/panel/resellers' },
      { name: 'Terminals', slug: '/panel/terminals' },
      { name: 'Terminal edit', slug: `/panel/terminals/edit/${this.route.snapshot.params.terminalId}` },
      { name: 'Risk Filter copy' }
    ]);

    this.formGroup = new FormGroup({
      terminals: new FormControl('', [Validators.required])
    });
  }

  clear() {
    this.formGroup.get('terminals').reset('');
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      const selectedTerminals: number[] = this.formGroup.get('terminals').value;
      this.terminalRiskFiltersService.copyToTerminals(this.route.snapshot.params.id, selectedTerminals).subscribe(() => {
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
