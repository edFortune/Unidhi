import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';


export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { BlockFormComponent } from '../../shared/block-form/block-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    CandidatListComponent,
    CandidatNewComponent,
    BlockFormComponent
  ]
})
export class CandidatModule { }
