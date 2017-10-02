import { TestBed, async, inject } from '@angular/core/testing';

import { PermissionsGuard } from './permissions.guard';
import {UserService} from '../user.service';

describe('PermissionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionsGuard, UserService]
    });
  });

  it('should ...', inject([PermissionsGuard], (guard: PermissionsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
