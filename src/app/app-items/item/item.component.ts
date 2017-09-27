import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../items.service';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Creates a copy of an object to avoid 2Ways Databinding issue in the list on the left
      this.item = Object.assign({}, this.itemsService.findOne(params['id']));
    });
  }

  save(): void {
    this.itemsService.save(this.item);
    this.router.navigate(["crud"]);
  }

}
