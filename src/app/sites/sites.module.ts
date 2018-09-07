import { NgModule } from '@angular/core';
import { SiteRoutingModule } from './sites-routing.module';
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
    ServicesComponent],
    providers: [
    ],
})
export class DashboardModule {
}