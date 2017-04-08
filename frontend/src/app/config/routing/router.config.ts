import { Routes } from "@angular/router";

import { HomeComponent } from "../../components/home/home.component";
import { AboutComponent } from "../../components/about/about.component";
import { CustomersRouterConfig } from "./customers-router.config";
import { SuppliersRouterConfig } from "./suppliers-router.config";
import { RequestsRouterConfig } from "./requests-router.config";

import { Route } from "./route";

const indexRoute: Route = {
    path: '',
    component: HomeComponent
}

const fallbackRoute: Route = {
    path: '**',
    component: HomeComponent
}

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    ...CustomersRouterConfig,
    ...SuppliersRouterConfig,
    ...RequestsRouterConfig,
    indexRoute,
    fallbackRoute
/*        
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
*/
];