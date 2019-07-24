import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService,SharedService,SettingsService,SidebarService ,LoginGuardGuard} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:
  [
    SettingsService,
    SharedService,SidebarService,ServiceModule,UsuarioService,LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
