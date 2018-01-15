import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  orderForm = new FormGroup ({
    name: new FormControl()
  });
  ngOnInit(): void {
    console.log('inited');
    $('.nav-item').click( function() { console.log('clicked')});
  }
}
