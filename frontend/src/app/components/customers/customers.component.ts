import { Component, OnInit } from '@angular/core';

import { Customer } from "../../classes/customer";
import { CustomerService } from "../../services/customer.service";

@Component({
  moduleId : module.id,  
  selector: 'customers',
  templateUrl: './customers.component.html',
  providers: [CustomerService]
})

export class CustomersComponent implements OnInit{
  customers : Customer[];
  pageTitle : string = "Customers"; 
  
  constructor(private customerService : CustomerService) { }
  
  getCustomers() : void {
    this.customerService
      .getCustomers()
      .then(customers => this.customers = customers);
  }

  ngOnInit() : void {
    this.getCustomers();
  }
}