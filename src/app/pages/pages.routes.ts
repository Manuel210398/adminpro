import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {LoginGuardGuard} from '../services/service.index';

const pagesRoutes: Routes = [
    {
        path:'',component: PagesComponent,
        canActivate:[LoginGuardGuard],
        children:[
            {path: 'dashboard', component: DashboardComponent, data: {titulo:'Dashboard'}},
            {path: 'account-settings', component: AccountSettingsComponent , data: {titulo:'Ajustes del Tema'}},
            {path: '', redirectTo : '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);