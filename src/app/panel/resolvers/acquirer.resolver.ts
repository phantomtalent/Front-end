import {IAcquirer} from '@utils/interfaces';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AcquirerService} from '@app/panel/service/acquirer.service';

@Injectable()
export class AcquirerResolver implements Resolve<IAcquirer> {
  constructor(private _acquirerService: AcquirerService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IAcquirer> {
    return this._acquirerService.get(route.params.id);
  }
}
