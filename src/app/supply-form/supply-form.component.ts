import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supply-form',
  templateUrl: './supply-form.component.html',
  styleUrls: ['./supply-form.component.scss']
})

export class SupplyFormComponent implements OnInit {

  @Input() public supplyForm: FormGroup;
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  
  constructor() { }

  ngOnInit() {
  }

}
