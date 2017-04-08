import { Component, OnInit } from '@angular/core';

import { Supplier } from "../../classes/supplier";
import { SupplierService } from "../../services/supplier.service";

@Component({
  moduleId: module.id,
  selector: 'suppliers',
  templateUrl: './suppliers.component.html',
  providers: [SupplierService]
})

export class SuppliersComponent implements OnInit{
  suppliers : Supplier[];
  pageTitle : string = "Suppliers";

  constructor(private supplierService : SupplierService){   
  }

  getSuppliers() : void {
    this.supplierService
      .getSuppliers()
      .then(suppliers => this.suppliers = suppliers);
  }

  ngOnInit() : void {
    this.getSuppliers();
  }
}