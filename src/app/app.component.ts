import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'ngbd-modal-order',
  template: `<app-modal 
              [id]="'order'" 
              [formGroup]="orderForm" 
              [title]="'Оформление заказа'" 
              [button]="'Оформить заказ'">
              <app-order-form [orderForm]="orderForm"></app-order-form>
            </app-modal>`
})
export class NgbdModalOrderComponent {
  @Input() public orderForm: FormGroup;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-supply',
  template: `<app-modal 
              [id]="'supply'" 
              [formGroup]="supplyForm" 
              [title]="title" 
              [button]="button">
              <app-supply-form [supplyForm]="supplyForm"></app-supply-form>
            </app-modal>`
})

export class NgbdModalSupplyComponent {
  @Input() public supplyForm: FormGroup;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  orderForm = this.fb.group({
    forma: this.fb.group({
      oval: [false],
      shar: [false],
      kaplya: [false],
      bstoyki: [false],
      double: [false],
    }),
    podushka: this.fb.group({
      blue: [false],
      brown: [false],
      red: [false],
      bezhev: [false],
      other: [false]
    }),
    customer: this.fb.group({
      fio: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email]],
      city: ['', [Validators.required ]],
      address: ['', [ Validators.required ]],
      phone: ['', [Validators.required]],
      comment: ['']
    }),
    method: ['sms', [ Validators.required]]
  });

  supplyForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    type: ['']
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {

  }

  openOrderForm(event) {
    const data = event || null;

    const modalRef = this.modalService
      .open(NgbdModalOrderComponent, { size: 'lg' });

    if (data) {
      this.orderForm.get('forma').reset();
      this.orderForm.get('forma').get(data).setValue(true);
    }

    modalRef.componentInstance.orderForm = this.orderForm;
    modalRef.result
    .then((res) => {
      this.http.post('http://new.pletenev.ru/mail.php', JSON.stringify(res))
      .subscribe((r) => {
        window.location.href="http://pletenev.ru/spasibo.html";
        console.log('Sent..');
      });
    },(reason) => {});
  }

  openSupplyForm(data) {
    const modalRef = this.modalService
      .open(NgbdModalSupplyComponent);

    this.supplyForm.get('type').setValue(data.type);
    modalRef.componentInstance.supplyForm = this.supplyForm;
    modalRef.componentInstance.button = data.button;
    modalRef.componentInstance.title = data.title;
    modalRef.result
    .then((res) => {
      this.http.post('http://new.pletenev.ru/supply.php', JSON.stringify(res))
      .subscribe((r) => {
        console.log('Supply..');
      });
    },(reason) => {});
  }

  openDilerForm() {
    this.openSupplyForm({
      title : 'Отправка заявки',
      button: 'Отправить',
      type: 'Дилер'
    })
  }

  openCallForm() {
    this.openSupplyForm({
      title : 'Заказ звонка',
      button: 'Заказать',
      type: 'Заказ звонка'
    })
  }
}
