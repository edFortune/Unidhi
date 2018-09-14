import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantNewComponent } from './etudiant-new/etudiant-new.component';

const routes: Routes = [
  {
    path: '', component: EtudiantListComponent
  },
  {
    path: 'new', component: EtudiantNewComponent
  },
  {
    path: ':id', component: EtudiantNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
