import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule
  ],
  declarations: [CandidatListComponent, CandidatNewComponent]
})
export class CandidatModule { }
