import { Money } from "./money"

export class Order {
    id : number; 
    customerId : number;
    vehiculeId : number;
    supplierId : number;
    status : string;
	quantity : number;
	price : Money;
	description : string;
	referenceNumber : string;
	date : string;
}

