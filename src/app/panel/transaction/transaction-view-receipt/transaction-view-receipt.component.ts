import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbService} from '@app/panel/service/breadcrumb.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionService} from '@app/panel/service/transaction.service';
import {Transaction} from '@utils/models';
import {IMerchant, ITransaction} from '@utils/interfaces';
import {MerchantService} from '@app/panel/service/merchant.service';
import { mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as jspdf from 'jspdf';
import * as domToImage from 'dom-to-image';
import * as printJS from 'print-js';
@Component({
  selector: 'app-transaction-view-receipt',
  templateUrl: './transaction-view-receipt.component.html',
  styleUrls: ['./transaction-view-receipt.component.scss']
})
export class TransactionViewReceiptComponent implements OnInit {

  transaction: ITransaction = new Transaction();
  merchant: IMerchant;
  @ViewChild('container') container; 
  constructor(private transactionService: TransactionService,
              private merchantService: MerchantService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/transactions' }, { name: 'Payment Transaction Receipt' }]);
    const transactionid = this.route.snapshot.params['id'];

    if (!transactionid) {
      this.router.navigate(['panel', 'transactions']);
    }

    this.transactionService.get(transactionid).pipe(
      tap(transaction => {
        this.transaction = transaction;
      }),
      mergeMap(transaction => {
        if (transaction != null) {
          return this.merchantService.get(transaction.merchant_id);
        } else {
          return of(null);
        }
      })
    ).subscribe(merchant => {
      if (merchant != null) {
        this.merchant = merchant;
        console.log(this.merchant);
      }
    });
  }
  
  print() {
    // const quotes = document.getElementById('contentToConvert');
    // window.print();
    const quotes = this.container.nativeElement;
    domToImage.toPng(quotes)
    .then(function (dataUrl) {
      printJS({printable: dataUrl, type: 'image', base64: true});
    });
    
  }

  download(){
    const quotes = this.container.nativeElement;
    domToImage.toPng(quotes)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const pdf = new jspdf({
          orientation: 'portrait',
          unit: 'pt',
          format: [img.width, img.height]
        });
        pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
        pdf.save('detail.pdf');
      }
    });
  }
}
