import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>{{name}}</h1>`,
})

export class HomeComponent{ name = "Home" }