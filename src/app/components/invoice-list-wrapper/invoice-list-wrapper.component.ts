import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-invoice-list-wrapper',
  templateUrl: './invoice-list-wrapper.component.html',
  styleUrls: ['./invoice-list-wrapper.component.scss']
})
export class InvoiceListWrapperComponent {


  constructor(public dataService: DataService) {
  }


}
