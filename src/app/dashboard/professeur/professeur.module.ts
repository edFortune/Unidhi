import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ProfesseurRoutingModule } from './professeur-routing.module';
import { ProfesseurNewComponent } from './professeur-new/professeur-new.component';
import { ProfesseurListComponent } from './professeur-list/professeur-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    Ng2SmartTableModule,
    SharedModule
  ],
  declarations: [
    ProfesseurNewComponent,
    ProfesseurListComponent
  ]
})
export class ProfesseurModule { }
