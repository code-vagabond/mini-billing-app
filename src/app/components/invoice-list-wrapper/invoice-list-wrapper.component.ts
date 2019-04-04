import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';

@Component({
  selector: 'app-invoice-list-wrapper',
  templateUrl: './invoice-list-wrapper.component.html',
  styleUrls: ['./invoice-list-wrapper.component.scss']
})
export class InvoiceListWrapperComponent {

  subscription: Subscription;


  constructor(public dataService: DataService) {
  }


  setIndex(index: number) {
    this.dataService.setIndex(index)
  }


}
