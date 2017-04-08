import { Component, OnInit } from '@angular/core';

import { Request } from "../../classes/request";
import { RequestService } from "../../services/request.service";

@Component({
  moduleId: module.id,  
  selector: 'requests',
  templateUrl: './requests.component.html',
  providers: [RequestService]
})

export class RequestsComponent implements OnInit{
  requests: Request[];
  pageTitle: string = "Requests";

  constructor(private requestService : RequestService) { }
  
  getRequests() : void {
    this.requestService
      .getRequests()
      .then(requests => this.requests = requests);
  }

  ngOnInit() : void {
    this.getRequests();
  }
}