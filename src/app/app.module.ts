import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoungeComponent } from './lounge/lounge.component';
import { ITextComponent } from './i-text/i-text.component';
import { ModalComponent } from './modal/modal.component';
import { ChooseFormComponent } from './choose-form/choose-form.component';
import { SupplyFormComponent } from './supply-form/supply-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoungeComponent,
    ITextComponent,
    ModalComponent,
    ChooseFormComponent,
    SupplyFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
