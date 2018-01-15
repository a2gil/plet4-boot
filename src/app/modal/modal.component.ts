import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public id: string;
  @Input() public button: string;
  @Input() public title: string;
  @Input() public formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
