import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `<h1>{{name}}</h1>`,
})

export class AboutComponent{ name = "About"}