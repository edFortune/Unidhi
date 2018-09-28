import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: './sites/sites.module#SitesModule' },
  { path: 'dash', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AdminGuard] },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
