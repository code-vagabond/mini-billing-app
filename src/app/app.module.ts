import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceListWrapperComponent } from './components/invoice-list-wrapper/invoice-list-wrapper.component';
import { InvoiceViewerComponent } from './components/invoice-viewer/invoice-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceListWrapperComponent,
    InvoiceViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
