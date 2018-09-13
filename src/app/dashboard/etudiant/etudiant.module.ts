import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantNewComponent } from './etudiant-new/etudiant-new.component';

@NgModule({
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ],
  declarations: [EtudiantListComponent, EtudiantNewComponent]
})
export class EtudiantModule { }
