import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  invoices: Invoice[] = [];
  _index = new BehaviorSubject(0);
  index$: Observable<number>;
  _invoices = new BehaviorSubject([]);
  invoices$: Observable<Invoice[]>

  constructor() {
    this.index$ = this._index.asObservable();
    this.invoices$ = this._invoices.asObservable();
  }

  setIndex(number: number) {
    this._index.next(number)
  }

  import() {
    let dataString = prompt('Bitte JSON als String angeben');
    this.invoices = JSON.parse(dataString);
    this._invoices.next(this.invoices)
    this.setIndex(0)
  }

  addInvoice() {
    this.invoices.push({
      customer_id: null,
      customer_name:  null,
      customer_contact_person: null,
      customer_address: null,
      customer_zip: null,
      customer_city: null,
      iban: null,
      bic: null,
      account_owner: null,
      mandate_reference: null,
      mandate_city: null,
      mandate_date: null,
      mandate_signee: null,
      invoice_number: null,
      invoice_period: null,
      invoice_date: null,
      invoice_due_date: null,
      line_items: null,
    })
    this._invoices.next(
      this.invoices
    )
  }

  export() {
    console.log(this.invoices)
  }
}
