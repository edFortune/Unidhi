import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'candidats', loadChildren: './candidat/candidat.module#CandidatModule' },
      { path: 'etudiants', loadChildren: './etudiant/etudiant.module#EtudiantModule' },
      { path: 'professeurs', loadChildren: './professeur/professeur.module#ProfesseurModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
