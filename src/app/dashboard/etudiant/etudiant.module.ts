import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantNewComponent } from './etudiant-new/etudiant-new.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    Ng2SmartTableModule,
    SharedModule
  ],
  declarations: [
    EtudiantListComponent,
    EtudiantNewComponent
  ]
})
export class EtudiantModule { }
