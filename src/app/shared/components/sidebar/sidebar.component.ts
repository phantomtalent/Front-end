import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DownloadService } from '@app/panel/service/download.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @ViewChild('mainMenu') mainMenu: ElementRef;

  timer = null;
  menuItems = [
    {
      type: 'sub-header',
      title: 'Layouts',
    },
    {
      type: 'menu-item',
      uri: '/panel/dashboard',
      title: 'Dashboard',
      icon: 'os-icon os-icon-layout',
      subMenu: {
        title: 'Dashboard',
        icon: 'os-icon os-icon-layout',
        links: [
          {
            uri: '/panel/dashboard',
            title: 'Overview',
            icon: 'os-icon-layout',
          },
          {
            uri: '/panel/top_terminal',
            title: 'Top Terminals',
            icon: 'os-icon-layout',
          },
          {
            uri: '/panel/top_merchant',
            title: 'Top Merchants',
            icon: 'os-icon-layout',
          },
          {
            uri: '/panel/top_contract',
            title: 'Top Contracts',
            icon: 'os-icon-layout',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/transactions',
      title: 'Payment Transactions',
      icon: 'os-icon os-icon-layers',
      subMenu: {
        title: 'Payment Transactions',
        icon: 'os-icon os-icon-layers',
        links: [
          {
            type: 'menu-item',
            uri: '/panel/transactions',
            title: 'Payment Transactions',
            icon: 'os-icon os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/processed_transactions',
            title: 'Processed Transactions',
            icon: 'os-icon os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/transaction_notes',
            title: 'Transactions Notes',
            icon: 'os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/apiattempts',
            title: 'Api Attempts list',
            icon: 'os-icon-layout',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/wpf_payments',
      title: 'WPF Payments',
      icon: 'os-icon os-icon-edit-32',
      subMenu: null
    },
    {
      type: 'menu-item',
      uri: '/panel/virtual_terminal',
      title: 'Virtual Terminal',
      icon: 'os-icon os-icon-file-text',
      subMenu: null
    },
    {
      type: 'menu-item',
      uri: '/panel/resellers',
      title: 'Configuration',
      icon: 'os-icon os-icon-edit-1',
      subMenu: {
        title: 'Configuration',
        icon: 'os-icon os-icon-edit-1',
        links: [
          {
            type: 'menu-item',
            uri: '/panel/resellers',
            title: 'Resellers',
            icon: 'os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/merchants',
            title: 'Merchants',
            icon: 'os-icon os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/contracts',
            title: 'Contracts',
            icon: 'os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/terminals',
            title: 'Terminals ',
            icon: 'os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/acquirers',
            title: 'Acquirers',
            icon: 'os-icon-layout',
          },
          {
            type: 'menu-item',
            uri: '/panel/companies',
            title: 'Companies',
            icon: 'os-icon-layout',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/blacklists',
      title: 'Blacklists',
      icon: 'entypo-icon-cross',
      subMenu: null
    },
    {
      type: 'menu-item',
      uri: '/panel/merchants',
      title: 'Whitelists',
      icon: 'entypo-icon-check',
      subMenu: null
    },
    {
      type: 'menu-item',
      uri: '/panel/apiattempts',
      title: 'Risk Management',
      icon: 'os-icon os-icon os-icon-zap',
      subMenu: {
        title: 'Some submenu title',
        icon: 'os-icon os-icon os-icon-zap',
        links: [
          {
            uri: '/panel/chargebacks',
            title: 'Chargebacks',
          },
          {
            uri: '/panel/retrievalrequests',
            title: 'Retrieval Requests',
          },
          {
            uri: '/panel/visafraudreports',
            title: 'Visa Fraud Report',
          },
          {
            uri: '/panel/mastercardfraudreports',
            title: 'Mastercard Fraud Report',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/users',
      title: 'Users',
      icon: 'os-icon os-icon-users',
      subMenu: {
        title: 'Users',
        icon: 'os-icon os-icon-users',
        links: [
          {
            uri: '/panel/users',
            title: 'Admin Users',
            icon: 'os-icon os-icon-layout',
          },
          {
            uri: '/panel/merchantusers',
            title: 'Merchant Users',
            icon: 'os-icon-layout',
          },
          {
            uri: '/panel/resellerusers',
            title: 'Reseller Users',
            icon: 'os-icon-layout',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/apiattempts',
      title: 'System',
      icon: 'os-icon os-icon-grid-squares-22',
      subMenu: {
        title: 'System',
        icon: 'os-icon os-icon-grid-squares-22',
        links: [
          {
            uri: '/panel/eventlogs',
            title: 'Event Logs',
          },
          {
            uri: '/panel/tasklogs',
            title: 'Task Logs',
          },
          {
            uri: '/panel/processinglogs',
            title: 'Processing Logs',
          },
          {
            uri: '/panel/apiattempts',
            title: 'Api Attempts list',
          },
          {
            uri: '/panel/notifications',
            title: 'Notifications list',
          },
        ]
      }
    },
    {
      type: 'menu-item',
      uri: '/panel/apiattempts',
      title: 'Downloads',
      icon: 'entypo-icon-download',
      subMenu: {
        title: 'Downloads',
        icon: 'entypo-icon-download',
        links: [
          {
            uri: '/panel/downloads/doc',
            title: 'API Documentation',
            isApiPdf: true
          },
          {
            uri: '/panel/notifications',
            title: 'User Guide',
          },
        ]
      }
    },
  ];

  constructor(
    private router: Router,
    private downloadService: DownloadService
  ) { }

  navigateTo(item: any) {
    if (item && item.uri) {
      if (item.isApiPdf) {
        this.downloadService.downloadPDF().subscribe(res => {
          const fileURL = URL.createObjectURL(res);
          window.open(fileURL, '_blank');
        });
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
        this.router.navigate([item.uri], { skipLocationChange: false });
      }
    }
  }

  getIconClass(item: any): object {
    const result = {};
    result[item.icon] = true;
    return result;
  }

  onMenuItemMouseEnter(event, item): void {
    if (!item.subMenu || !item.subMenu.links || item.subMenu.links.length === 0) {
      return;
    }

    if (this.mainMenu && this.mainMenu.nativeElement) {
      (<Element>this.mainMenu.nativeElement).classList.add('has-active');
    }
    event.srcElement.classList.add('active');
  }

  onMenuItemMouseLeave(event, item): void {
    if (!item.subMenu || !item.subMenu.links || item.subMenu.links.length === 0) {
      return;
    }

    this.timer = setTimeout(() => {
      event.srcElement.classList.remove('active');
      if (this.mainMenu && this.mainMenu.nativeElement) {
        (<Element>this.mainMenu.nativeElement).classList.remove('has-active');
      }
    }, 30);
  }
}
