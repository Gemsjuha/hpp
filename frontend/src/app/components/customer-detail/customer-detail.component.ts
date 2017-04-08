import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Customer } from '../../classes/customer';
import { Vehicule } from '../../classes/vehicule';
import { CustomerService} from '../../services/customer.service';

@Component({
  moduleId : module.id, 
  selector : 'customer-detail',
  templateUrl: './customer-detail.component.html',
  providers: [CustomerService]
})

export class CustomerDetailComponent implements OnInit{ 
  customer : Customer;
  name = "CustomerDetailComponent";
  vehicules : Vehicule[];

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private customerService : CustomerService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.customerService.getCustomer(+params['id']))
      .subscribe((customer : Customer) => this.customer = customer);
  }
}