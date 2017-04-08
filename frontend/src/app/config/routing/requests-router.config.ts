// import { RequestDetailComponent } from "../../components/request-detail/request-detail.component";
import { RequestsComponent } from "../../components/requests/requests.component";

export const RequestsRouterConfig = [
    {
        path: 'requests',
        children : [
            {
                path : '',
                component: RequestsComponent
            },
            /*{
                path : ':id',
                component: RequestDetailComponent
            }*/
        ]     
    }
]
