import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        AccountSettingsComponent
        
    ],
    exports: [
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})

export class PagesModule{ }