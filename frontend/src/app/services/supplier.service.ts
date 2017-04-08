import { Injectable } from '@angular/core';

import { Supplier } from '../classes/supplier';
import { SUPPLIERS } from '../mocks/mock-suppliers';

@Injectable()
export class SupplierService {
  getSuppliers(): Promise<Supplier[]> {
    return Promise.resolve(SUPPLIERS);
  }
}
