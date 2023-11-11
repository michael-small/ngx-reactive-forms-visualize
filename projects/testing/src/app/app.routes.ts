import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { CallAndApplyComponent } from './call-and-apply/call-and-apply.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'signals',
                component: SignalsComponent,
            },
            {
                path: 'call-and-apply-pipes',
                component: CallAndApplyComponent,
            },
            {
                path: 'form-examples',
                component: FormExamplesComponent,
            },
        ],
    },
];
