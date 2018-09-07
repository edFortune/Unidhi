import { NgModule } from '@angular/core';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { BlockFormComponent } from './shared/block-form/block-form.component';

@NgModule({
    imports: [
        FormsModule,
        DashRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        CommonModule
    ],
    declarations: [
        DashComponent,
        BlockFormComponent,
    ],
    providers: [],
})
export class DashboardModule {
}