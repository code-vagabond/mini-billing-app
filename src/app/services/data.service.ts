import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  invoices: Invoice[];
  currentIndex = 0;
  _index = new BehaviorSubject(0);
  index$: Observable<number>;


  constructor() {
    this.index$ = this._index.asObservable();
  }

  setIndex(number: number) {
    this.currentIndex = number
    this._index.next(number)
  }


  import() {
    let dataString = prompt('Bitte JSON als String angeben');
    this.invoices = JSON.parse(dataString);
    this.setIndex(0)
  }

  addInvoice() {
    this.invoices ? null : this.invoices = []
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
      line_items: [
        {
          name: null,
          description: null,
          quantity: null,
          price_cents: null,
        }

      ]
    })
  }

  export() {
    console.log(this.invoices)
  }
}
