import { Component } from '@angular/core';
import { Request } from "../../classes/request"
@Component({
  moduleId: module.id,  
  selector: 'add-requests-modal',
  templateUrl: './add-requests-modal.component.html',
})

export class AddRequestsModalComponent {
  requests: Request[];
  pageTitle: string = "";

  constructor() { }
}