import { CustomerDetailComponent } from "../../components/customer-detail/customer-detail.component";
import { CustomersComponent } from "../../components/customers/customers.component";

export const CustomersRouterConfig = [
    {
        path: 'customers',
        children : [
            {
                path : '',
                component: CustomersComponent
            },
            {
                path : ':id',
                component: CustomerDetailComponent
            }
        ]
    }
]
