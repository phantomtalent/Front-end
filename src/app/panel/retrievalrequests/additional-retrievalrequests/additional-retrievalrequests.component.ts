import { Component, Input } from '@angular/core';
import { IRetrievalRequest } from '@utils/interfaces';

@Component({
  selector: 'app-additional-retrievalrequests',
  templateUrl: './additional-retrievalrequests.component.html',
  styleUrls: ['./additional-retrievalrequests.component.scss']
})
export class AdditionalRetrievalRequestsComponent {
  @Input() retrievalrequests: IRetrievalRequest[] = [];
}
