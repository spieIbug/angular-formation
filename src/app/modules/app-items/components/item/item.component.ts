import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../../services/items.service';
import {Item} from '../../model/item';
import {NgModel, ValidationErrors} from '@angular/forms';
import 'rxjs/operator/map';

// import * as $ from 'jquery'; <- not used yet


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  /**
   * provided by ItemResolver
   */
  item: Item;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.item = data['item'] ? data['item'] : {
      id: null,
      title: null,
      description: null
    });
  }

  save(): void {
    this.itemsService.save(this.item);
    this.router.navigate(["crud"]);
  }
}
