import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
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
  @Output() public onSubmit = new EventEmitter();
  validated: boolean;

  constructor() { }

  ngOnInit() {
    this.validated = false;
  }

  submit() {
    if (this.formGroup.valid) {
       this.onSubmit.emit();
    }
    else {
      this.validated = true;
    }
  }
}
