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
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    Ng2SmartTableModule,
    SharedModule
  ],
  declarations: [
    CandidatListComponent,
    CandidatNewComponent
  ]
})
export class CandidatModule { }
