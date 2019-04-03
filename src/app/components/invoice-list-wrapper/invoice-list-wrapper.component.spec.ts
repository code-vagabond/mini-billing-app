import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListWrapperComponent } from './invoice-list-wrapper.component';

describe('InvoiceListWrapperComponent', () => {
  let component: InvoiceListWrapperComponent;
  let fixture: ComponentFixture<InvoiceListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
