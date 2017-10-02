import { TestBed, inject } from '@angular/core/testing';

import { ItemResolver } from './item-resolver';
import {ItemsService} from '../../../app-items/services/items.service';

describe('ItemResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemResolver, ItemsService]
    });
  });

  it('should be created', inject([ItemResolver], (service: ItemResolver) => {
    expect(service).toBeTruthy();
  }));
});
