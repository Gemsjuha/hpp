import { Order } from '../classes/order';
import { Money } from '../classes/money'
import { Currency } from '../classes/currency';

export const ORDERS: Order[] = [
  {id: 1, customerId: 1, vehiculeId : 1, supplierId : 1, status : 'In Progress', quantity : 2,  
    price : { amount : 1, currency : Currency.EUR }, description : 'A part', referenceNumber : '1111', date : '2017-04-05'}
];
