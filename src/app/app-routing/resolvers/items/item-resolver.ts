import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Item} from '../../../app-items/item';
import {Observable} from 'rxjs/Observable';
import {ItemsService} from '../../../app-items/items.service';

@Injectable()
export class ItemResolver implements Resolve<Item> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Promise<Item> | Item {
    return <Item>{...this.itemsService.findOne(+route.paramMap.get('id'))};
  }

  constructor(private itemsService: ItemsService) {
  }

}
