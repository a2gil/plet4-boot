import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  ngOnInit(): void {
    console.log('inited');
    $('.nav-item').click( function() { console.log('clicked')});
  }
}
