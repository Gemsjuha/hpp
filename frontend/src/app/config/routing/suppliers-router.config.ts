import { SupplierDetailComponent } from "../../components/supplier-detail/supplier-detail.component";
import { SuppliersComponent } from "../../components/suppliers/suppliers.component";

export const SuppliersRouterConfig = [
    {
        path: 'suppliers',
        children : [
            {
                path : '',
                component: SuppliersComponent
            },
            {
                path : ':id',
                component: SupplierDetailComponent
            }
        ]     
    }
]
