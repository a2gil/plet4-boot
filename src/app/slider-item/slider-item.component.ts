import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {trigger, style, transition, state, animate} from '@angular/animations';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ]
})
export class SliderItemComponent   {
  
  @Input() public active: boolean;
  
  constructor() { }
}
