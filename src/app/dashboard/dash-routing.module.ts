import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { CandidatListComponent } from './candidat/candidat-list/candidat-list.component';

const routes: Routes = [
    {
        path: '', component: DashComponent, children: [
            {
                path: '', component: DashHomeComponent
            },
            {
                path: 'candidats', component: CandidatListComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule { }
