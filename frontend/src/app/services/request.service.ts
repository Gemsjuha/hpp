import { Injectable } from '@angular/core';
import { Request } from '../classes/request';
import { REQUESTS } from '../mocks/mock-requests';

let requestsPromise = Promise.resolve(REQUESTS);

@Injectable()
export class RequestService {
  
  getRequests(): Promise<Request[]> {
    return requestsPromise;
  }

  getRequest( id : number): Promise<Request> {
    return requestsPromise
      .then(requests => requests.find(request => request.id == +id));
  }  
}
