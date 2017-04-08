import {HomeComponent} from "../components/home.component";
import {AboutComponent} from "../components/about.component";
import {ComponentNameRouterConfig} from "./component-name-router.config";
import {Routes} from "@angular/router";
import {Route} from "./route";

const indexRoute: Route = {
    path: '',
    Component: HomeComponent
}

const fallbackRoute: Route = {
    path: '**',
    Component: HomeComponent
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
    ...ComponentNameRouterConfig
    ,
    indexRoute,
    fallbackRoute
];