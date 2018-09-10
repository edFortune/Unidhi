import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SiteRoutingModule } from './sites-routing.module';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavSiteComponent } from './nav-site/nav-site.component';
import { MotRecteurComponent } from './rectorat/mot-recteur/mot-recteur.component';
import { HistoireComponent } from './rectorat/histoire/histoire.component';
import { CodeEtiqueComponent } from './rectorat/code-etique/code-etique.component';
import { VisionComponent } from './rectorat/vision/vision.component';
import { ScienceAdministrativeComponent } from './programmes/preparatoire/science-administrative/science-administrative.component';
import { SciencePolitiqueComponent } from './programmes/preparatoire/science-politique/science-politique.component';
import { EtudiantPostGradueComponent } from './admission/requisition/etudiant-post-gradue/etudiant-post-gradue.component';
import { EtudiantGradueComponent } from './admission/requisition/etudiant-gradue/etudiant-gradue.component';
import { EtudiantPreparatoireComponent } from './admission/requisition/etudiant-preparatoire/etudiant-preparatoire.component';

@NgModule({
    imports: [
        FormsModule,
        SiteRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        CommonModule
    ],
    declarations: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        FormComponent,
        HomeComponent,
        LoginComponent,
        PortfolioComponent,
        ServicesComponent,
        NavHomeComponent,
        NavSiteComponent,
        MotRecteurComponent,
        HistoireComponent,
        CodeEtiqueComponent,
        VisionComponent,
        ScienceAdministrativeComponent,
        SciencePolitiqueComponent,
        EtudiantPostGradueComponent,
        EtudiantGradueComponent,
        EtudiantPreparatoireComponent],
    providers: [
    ],
})
export class SitesModule {
}