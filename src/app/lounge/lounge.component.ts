import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss']
})
export class LoungeComponent implements OnInit {

  @Input() public imgSrc: string = '';
  @Input() public title: string = '';
  @Input() public type: string = '';
  @Input() public corpus: string = '';
  @Input() public price: number = 0;
  @Output() public onOrder = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  order(event) {
    if (this.onOrder)
      this.onOrder.emit(event);
  }
}
