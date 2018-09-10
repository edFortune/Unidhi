import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MotRecteurComponent } from './rectorat/mot-recteur/mot-recteur.component';
import { HistoireComponent } from './rectorat/histoire/histoire.component';
import { CodeEtiqueComponent } from './rectorat/code-etique/code-etique.component';
import { VisionComponent } from './rectorat/vision/vision.component';
import { ScienceAdministrativeComponent } from './programmes/preparatoire/science-administrative/science-administrative.component';
import { SciencePolitiqueComponent } from './programmes/preparatoire/science-politique/science-politique.component';
import { EtudiantPostGradueComponent } from './admission/requisition/etudiant-post-gradue/etudiant-post-gradue.component';
import { EtudiantGradueComponent } from './admission/requisition/etudiant-gradue/etudiant-gradue.component';
import { EtudiantPreparatoireComponent } from './admission/requisition/etudiant-preparatoire/etudiant-preparatoire.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    //Rectorat
    { path: 'rectorat/recteur', component: MotRecteurComponent },
    { path: 'rectorat/histoire', component: HistoireComponent },
    { path: 'rectorat/code-etique', component: CodeEtiqueComponent },
    { path: 'rectorat/vision', component: VisionComponent },
    //Programme offert - preparatoire
    { path: 'programmes/preparatoire/science-administrative', component: ScienceAdministrativeComponent },
    { path: 'programmes/preparatoire/science-politique', component: SciencePolitiqueComponent },
    //Admission - Requisition
    { path: 'admission/etudiant-post-gradue', component: EtudiantPostGradueComponent },
    { path: 'admission/etudiant-gradue', component: EtudiantGradueComponent },
    { path: 'admission/etudiant-preparatoire', component: EtudiantPreparatoireComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
