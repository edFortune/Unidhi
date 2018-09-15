import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesseurListComponent } from './professeur-list/professeur-list.component';
import { ProfesseurNewComponent } from './professeur-new/professeur-new.component';

const routes: Routes = [
  {
    path: '', component: ProfesseurListComponent
  },
  {
    path: 'new', component: ProfesseurNewComponent
  },
  {
    path: ':id', component: ProfesseurNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
