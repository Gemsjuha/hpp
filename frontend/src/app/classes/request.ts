export class Request {
    id : number;
    status : string; // status is an enum value
    licensePlate : string; // From Vehicule class
    customerName : string; // From Customer class
    summary : string;
    description : string;
    createDate : number; // createdDate to convert to Date;
    lastModifyDate : number; // lastModifyDate to convert to Date;
    notes : any[];
}