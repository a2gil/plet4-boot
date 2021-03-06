import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-i-text',
  templateUrl: './i-text.component.html',
  styleUrls: ['./i-text.component.scss']
})
export class ITextComponent implements OnInit {

  @Input() public img: string = '';
  @Input() public width: number;
  @Input() public visibility = true;
  
  constructor() { }

  ngOnInit() {
  }

}
