import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  invoices: Invoice[];
  index = 0;
  customerNameList: string[]

  constructor() { }

  fetchAllCustomerNames() {
    this.invoices.map(
      invoce => invoce.customer_name
    )
  }

  import() {
    let dataString = prompt('Bitte JSON als String angeben');
    this.invoices = JSON.parse(dataString);
    const customerNames = this.fetchAllCustomerNames();
    console.log(customerNames)
  }

  export() {
    console.log(this.invoices)
  }
}
