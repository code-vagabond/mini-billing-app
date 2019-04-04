import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.scss']
})
export class InvoiceEditorComponent {

  constructor(
    private dataService: DataService
  ) {

  }



}
