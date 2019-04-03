export interface Invoice {
    customer_id: number,
    customer_name:  string,
    customer_contact_person: string,
    customer_address: string,
    customer_zip: number,
    customer_city: string,
    iban: string,
    bic: string,
    account_owner: string,
    mandate_reference: string,
    mandate_city: string,
    mandate_date: string,
    mandate_signee: string,
    invoice_number: string,
    invoice_period: string,
    invoice_date: string,
    invoice_due_date: string,
    line_items: LineItem[] | null,
}

export interface LineItem {
    name: string,
    description: string,
    quantity: number,
    price_cents: number
}