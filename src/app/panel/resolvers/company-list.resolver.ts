import {ICompany} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CompanyService} from '@app/panel/service/company.service';
import {IPagedResult} from '@app/panel/common/paged-result';

@Injectable()
export class CompanyListResolver implements Resolve<IPagedResult<ICompany>> {
  constructor(private _companyService: CompanyService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IPagedResult<ICompany>> {
    return this._companyService.search();
  }
}
