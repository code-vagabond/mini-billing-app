import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';

@Component({
  selector: 'app-invoice-list-wrapper',
  templateUrl: './invoice-list-wrapper.component.html',
  styleUrls: ['./invoice-list-wrapper.component.scss']
})
export class InvoiceListWrapperComponent implements OnInit {

  subscription: Subscription;
  customerNameList: string[];

  constructor(public dataService: DataService) {
    this.subscription = this.dataService.invoices$.subscribe(
      invoices => {
        console.log(invoices)
        this.customerNameList = invoices.map(
          invoice => invoice.customer_name
        )
      }
    )
  }

  ngOnInit() {
  }

  setIndex(index: number) {
    this.dataService.setIndex(index - 1)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
