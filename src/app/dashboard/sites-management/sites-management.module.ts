import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesManagementRoutingModule } from './sites-management-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    SitesManagementRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent]
})
export class SitesManagementModule { }
