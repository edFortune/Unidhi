import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';

const routes: Routes = [
  {
    path: '', component: CandidatListComponent
  },
  {
    path: 'new', component: CandidatNewComponent
  },
  {
    path: ':id', component: CandidatNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
