import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent, NgbdModalOrderComponent, NgbdModalSupplyComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoungeComponent } from './lounge/lounge.component';
import { ITextComponent } from './i-text/i-text.component';
import { ModalComponent } from './modal/modal.component';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { AdvantageComponent } from './advantage/advantage.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoungeComponent,
    ITextComponent,
    ModalComponent,
    SupplyFormComponent,
    OrderFormComponent,
    NgbdModalOrderComponent,
    NgbdModalSupplyComponent,
    AdvantageComponent,
    SliderComponent,
    SliderItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    NgbModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalOrderComponent, NgbdModalSupplyComponent]
})
export class AppModule { }
