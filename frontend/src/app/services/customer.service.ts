import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';
import { CUSTOMERS } from '../mocks/mock-customers';

let customersPromise = Promise.resolve(CUSTOMERS);

@Injectable()
export class CustomerService {
  
  getCustomers(): Promise<Customer[]> {
    return customersPromise;
  }

  getCustomer( id : number): Promise<Customer> {
    return customersPromise
      .then(customers => customers.find(customer => customer.id == +id));
  }  
}
