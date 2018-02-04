import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() public onCallHandler  = new EventEmitter<void>();
  public collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCall() {
    this.onCallHandler.emit();
  }

  onCollapse() {
    this.collapsed = !this.collapsed;
  }
}
