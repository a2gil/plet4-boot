import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  orderForm = this.fb.group({
    forma: this.fb.group({
      oval: [false],
      shar: [false],
      kaplya: [false],
      bstoyki: [false],
    }),
    kokon: this.fb.group({
      black: [false],
      white: [false],
      brown: [false],
      other: [false]
    }),
    podushka: this.fb.group({
      blue: [false],
      brown: [false],
      red: [false],
      bezhev: [false],
      other: [false]
    }),
    customer: this.fb.group({
      fio: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email]],
      city: ['',[Validators.required ]],
      address: ['', [ Validators.required ]],
      phone: ['', [Validators.required]],
      component:['']
    }),
    sms: [true]
  });

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    $('.nav-item').click( function() { console.log('clicked')});
  }
}
