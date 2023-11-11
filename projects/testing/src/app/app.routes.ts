import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'stuff',
        component: TestComponent,
    },
];
