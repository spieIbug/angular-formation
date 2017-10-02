import {TestBed, inject} from '@angular/core/testing';

import {ItemsService} from './items.service';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService]
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 8 elements', inject([ItemsService], (service: ItemsService) => {
    expect(service.findAll().length).toEqual(8);
  }));

  it('should return element', inject([ItemsService], (service: ItemsService) => {
    expect(service.findOne(1).title).toEqual('A\'m the first item');
  }));

  it('should return null', inject([ItemsService], (service: ItemsService) => {
    expect(service.findOne(10)).toBeNull();
  }));

  it('should test save and remove', inject([ItemsService], (service: ItemsService) => {
    service.remove(2);
    expect(service.findAll().length).toEqual(7);
    const title = '2nd';

    service.save({id: 2, title: title, description: 'description'});
    expect(service.findAll().length).toEqual(8);
    expect(service.findOne(2).title).toEqual(title);

    const newTitle = '2nd updated';
    service.save({id: 2, title: newTitle, description: 'description'});
    expect(service.findAll().length).toEqual(8);
    expect(service.findAll().length).toEqual(8);
    expect(service.findOne(2).title).toEqual(newTitle);


    service.save({id: null, title: newTitle, description: 'description'});
    expect(service.findAll().length).toEqual(9);
    expect(service.findAll().length).toEqual(9);
    expect(service.findOne(9).title).toEqual(newTitle);

    service.remove(9);

  }));
});
