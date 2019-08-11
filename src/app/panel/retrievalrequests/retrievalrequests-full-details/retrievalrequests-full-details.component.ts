import { Component, Input } from '@angular/core';
import { RetrievalRequest } from '@utils/models';

@Component({
  selector: 'app-retrievalrequests-full-details',
  templateUrl: './retrievalrequests-full-details.component.html',
  styleUrls: ['./retrievalrequests-full-details.component.scss']
})
export class RetrievalRequestsFullDetailsComponent {

  @Input() retrievalrequest: RetrievalRequest;

}
