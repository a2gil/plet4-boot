import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent, NgbdModalOrderComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoungeComponent } from './lounge/lounge.component';
import { ITextComponent } from './i-text/i-text.component';
import { ModalComponent } from './modal/modal.component';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoungeComponent,
    ITextComponent,
    ModalComponent,
    SupplyFormComponent,
    OrderFormComponent,
    NgbdModalOrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalOrderComponent]
})
export class AppModule { }
