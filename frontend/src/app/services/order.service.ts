import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { ORDERS } from '../mocks/mock-orders';

let ordersPromise = Promise.resolve(ORDERS);

@Injectable()
export class OrderService {
  
  getOrders(): Promise<Order[]> {
    return ordersPromise;
  }

  getOrder( id : number): Promise<Order> {
    return ordersPromise
      .then(orders => orders.find(order => order.id == +id));
  }  
}
