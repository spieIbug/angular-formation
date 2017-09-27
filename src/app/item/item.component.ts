import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../items.service';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = this.itemsService.findOne(params['id']);
      console.log(this.item);
    });
  }

}
