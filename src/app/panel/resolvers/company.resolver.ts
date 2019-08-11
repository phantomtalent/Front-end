import {ICompany} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CompanyService} from '@app/panel/service/company.service';

@Injectable()
export class CompanyResolver implements Resolve<ICompany> {
  constructor(private _companyService: CompanyService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ICompany> {
    return this._companyService.get(route.params.id);
  }
}
