import { NgModule } from '@angular/core';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { BlockFormComponent } from './shared/block-form/block-form.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { SitesComponent } from './sites/sites.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { CandidatListComponent } from './candidat/candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat/candidat-new/candidat-new.component';

@NgModule({
    imports: [
        FormsModule,
        DashRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        CommonModule,
        NgxDatatableModule

    ],
    declarations: [
        DashComponent,
        BlockFormComponent,
        EtudiantComponent,
        ProfesseurComponent,
        SitesComponent,
        SideBarComponent,
        NavBarComponent,
        DashHomeComponent,
        CandidatListComponent,
        CandidatNewComponent,
    ],
    providers: [],
})
export class DashboardModule {
}