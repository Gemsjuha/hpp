import {ClassName} from "../components/component-name.component";
import {ClassNameDetail} from "../components/component-name-detail.component";

export const ComponentNameRouterConfig = [
    {
        path: 'component-name',
        children : [
            {
                path : '',
                component: ClassName
            },
            {
                path : ':parameter',
                component: ClassNameDetail
            },

        ]
        
    }
]
