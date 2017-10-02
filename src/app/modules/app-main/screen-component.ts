import {Input} from '@angular/core';

/**
 * UI Components should extends me
 */
export abstract class ScreenComponent {
  @Input()
  abstract title: string;

  @Input()
  abstract subTitle: string;

  @Input()
  abstract icon: string;
}
