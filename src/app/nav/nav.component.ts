import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() public onCallHandler  = new EventEmitter<void>();
  public collapsed = false;
  public isMobile: boolean;

  constructor() {
    this.calculateIsMobile(window.screen.width);
  }

  ngOnInit() {
  }

  onCall() {
    this.onCallHandler.emit();
  }

  onCollapse() {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateIsMobile(event.target.innerWidth);
  }

  calculateIsMobile(width) {
    if (width < 992) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
