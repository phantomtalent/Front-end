import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin } from 'rxjs';

import { ContractsTerminals, Terminal, Contract } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { TerminalService } from '../../service/terminal.service';
import {
  INotificationUrls,
  INotificationUrlType,
  ITerminalRiskFilter,
  ITransaction,
  ITransactionDeclinedReasons
} from '@utils/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationUrlsService} from '@app/panel/service/notification-urls.service';

@Component({
  selector: 'app-terminal-details',
  templateUrl: './terminal-details.component.html',
  styleUrls: ['./terminal-details.component.scss']
})
export class TerminalDetailsComponent implements OnInit {

  terminal: Terminal = new Terminal();
  terminalRiskFilters: ITerminalRiskFilter[] = [];
  contractList: ContractsTerminals[] = [];
  contracts: Contract[] = [];
  declinedReasonsList: ITransactionDeclinedReasons[] = [];

  notificationUrlsList: INotificationUrls[] = [];
  notificationTypesList: INotificationUrlType[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private terminalService: TerminalService,
    private breadcrumbService: BreadcrumbService,
    private notificationUrlsService: NotificationUrlsService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Terminals', slug: '/panel/terminals' }, { name: 'Details' }]);
    const terminal = this.route.snapshot.data['terminal'];

    if (!terminal) {
      this.router.navigate(['panel', 'terminals']);
    }

    this.terminal = terminal;
    this.terminalRiskFilters = this.route.snapshot.data['terminalRiskFilters'];

    this.notificationUrlsService.getNotificationTypesList()
      .subscribe(value => {
        this.notificationTypesList = value;
      });

    this.loadNotificationsList();

    forkJoin(
      this.terminalService.getContractsList(),
      this.terminalService.getContracts(this.terminal.id)
    ).subscribe(([contracts, terminalContracts]) => {
      if (contracts) {
        contracts.forEach((element) => {
          this.contracts.push(new Contract(element));
        });
        if (terminalContracts) {
          terminalContracts.forEach((element) => {
            const contractsTerminals = new ContractsTerminals(element);
            const contract = this.contracts.find((ct) => ct.id === contractsTerminals.contract_id);
            contractsTerminals.name = contract.name;
            this.contractList.push(contractsTerminals);
          });
        }
      }
    });

    this.terminalService.getDeclineReasons(this.terminal.id)
      .pipe().subscribe(value => {
      if (value != null) {
        this.declinedReasonsList = value;
      }
    });
  }

  private async loadNotificationsList(): Promise<void> {
    try {
      this.notificationUrlsList = await this.notificationUrlsService.getList(this.terminal.id).toPromise();
    } catch (e) {
      this.notificationUrlsList = [];
    }
  }
}
