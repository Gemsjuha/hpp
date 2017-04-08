import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AddRequestsModalComponent } from './components/requests/add-requests-modal.component';

//import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import { AppRoutingModule  } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopMenuComponent,
    CustomersComponent,
    CustomerDetailComponent,
    SuppliersComponent,
    SupplierDetailComponent,
    RequestsComponent,
    AddRequestsModalComponent
    //RequestDetailComponent    
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
