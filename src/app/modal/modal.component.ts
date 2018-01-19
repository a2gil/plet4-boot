import { Component, OnInit, Input, EventEmitter  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  
  validated: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.validated = false;
  }

  submit() {
    if (this.formGroup.valid) {
       this.activeModal.close(this.formGroup.value);
       this.formGroup.reset();
       this.validated = false;
    }
    else {
      this.validated = true;
    }
  }
}
