import { Component, OnInit } from '@angular/core';

import { Order } from "../../classes/order";
import { OrderService } from "../../services/order.service";

@Component({
  moduleId : module.id,  
  selector: 'orders',
  templateUrl: './orders.component.html',
  providers: [OrderService]
})

export class OrdersComponent implements OnInit{
  orders : Order[];
  pageTitle : string = "Orders"; 
  
  constructor(private orderService : OrderService) { }
  
  getOrders() : void {
    this.orderService
      .getOrders()
      .then(orders => this.orders = orders);
  }

  ngOnInit() : void {
    this.getOrders();
  }
}