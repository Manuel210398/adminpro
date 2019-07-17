import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService,SettingsService,SidebarService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:
  [
    SettingsService,
    SharedService,SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
