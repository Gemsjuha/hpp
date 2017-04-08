import { Request } from '../classes/request';

export const REQUESTS: Request[] = [
  {
    id: 1, status : 'default', licensePlate: 'AA-229-AA', customerName: 'Daniel Craig', 
    summary : 'summary', description : 'description', createDate : 20170404, 
    lastModifyDate : 20170408,
    notes : [
              { id : 1, text : '' }
    ]          
  },
  {
    id: 2, status : 'success', licensePlate: '524 WAL 75', customerName: 'Sean Connery',
    summary : 'summary', description : 'description', createDate : 20170405, 
    lastModifyDate : 20170408, 
    notes : [
              { id : 1, text : '' }
    ]  
  },
  {
    id: 3, status : 'danger', licensePlate: 'AC-613-ET', customerName: 'Pierce Bronsman',
    summary : 'summary', description : 'description', createDate : 20170406,
    lastModifyDate : 20170408,
    notes : [
              { id : 1, text : '' }
    ]  
  },
  {
    id: 4, status : 'info', licensePlate: 'EA-068-1TE', customerName: 'Roger Moore',
    summary : 'summary', description : 'description', createDate : 20170407,
    lastModifyDate : 20170408,
    notes : [
              { id : 1, text : '' }
    ]  
  },
  {
    id: 5, status : 'warning', licensePlate: 'AX-755-EN', customerName: 'Timothy Dalton',
    summary : 'summary', description : 'description', createDate : 20170408,
    lastModifyDate : 20170408,
    notes : [
              { id : 1, text : '' }
    ]  
  },
  {
    id: 6, status : 'active', licensePlate: 'AA-123-AA', customerName: 'George Lazenby',
    summary : 'summary', description : 'description', createDate : 20170409,
    lastModifyDate : 20170408,
    notes : [
              { id : 1, text : '' }
    ]  
  }
];
