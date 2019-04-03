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
  invoice: Invoice;
  subscription: Subscription;

  allgemeineDatenFormGroup: FormGroup;
  zahlungsinformationenFormGroup: FormGroup;
  rechnungsdatenFormGroup: FormGroup;
  rechungspostenFormGroup: FormGroup;
  rechungspostenFormArray: FormArray;


  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.subscription = dataService.index$.subscribe(
      index => {
        if (this.dataService.invoices.length) {
          this.invoice = this.dataService.invoices[index];
          this.allgemeineDatenFormGroup = this.fb.group({
            customerID: [this.invoice.customer_id],
            customerName: [this.invoice.customer_name],
            customerContactPerson: [this.invoice.customer_contact_person],
            customerAddress: [this.invoice.customer_address],
            customerZIP: [this.invoice.customer_zip],
            customerCity: [this.invoice.customer_city],
          });

          this.zahlungsinformationenFormGroup = this.fb.group({
            iban: [this.invoice.iban],
            bic: [this.invoice.bic],
            accountOwner: [this.invoice.account_owner],
            mandateReference: [this.invoice.mandate_reference],
            mandateCity: [this.invoice.mandate_city],
            mandateDate: [this.invoice.mandate_date],
            mandateSignee: [this.invoice.mandate_signee],
          })

          this.rechnungsdatenFormGroup = this.fb.group({
            invoiceNumber: [this.invoice.invoice_number],
            invoicePeriod: [this.invoice.invoice_period],
            invoiceDate: [this.invoice.invoice_date],
            invoiceDueDate: [this.invoice.invoice_due_date],
          })

          // this.rechnungsdatenFormGroup = this.fb.group({
          //   name: 
          // })

          this.rechungspostenFormArray = this.fb.array([
            this.fb.control('')
          ]
          )

        }
      })

  }

  addRechnungsposten() {
    this.rechungspostenFormArray.push(this.fb.group({
      name: [''],
      description: [''],
      quantity: [''],
      price_cents: [''],
    }))
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
