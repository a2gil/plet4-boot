import { Component, AfterContentInit, QueryList, ContentChildren, OnDestroy } from '@angular/core';
import { SliderItemComponent } from '../slider-item/slider-item.component';

import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentInit,OnDestroy  {

  @ContentChildren(SliderItemComponent)
  public sliders: QueryList<SliderItemComponent>;
  private timerSubscribtion: Subscription;
  private currentIndex = 0;

  constructor() { }

  ngAfterContentInit(): void {
    let timer = Observable.timer(2000,5000);

    this.timerSubscribtion = timer.subscribe(t => {
       this.currentIndex = t % this.sliders.length;
       this.sliders.forEach((slider, index) => {
          slider.active = this.currentIndex === index;
       });
    });
    
  }

  ngOnDestroy(): void {
    if (this.timerSubscribtion)
    {
      this.timerSubscribtion.unsubscribe();
    }
  }

}
