import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './services/user.service';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NavComponent} from './nav/nav.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModealBasicComponent} from './modeal-basic/modeal-basic.component';
import {RouterModule, Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { RegolamentoComponent } from './regolamento/regolamento.component';
import { HomeComponent } from './home/home.component';
import { InfoClanComponent } from './info-clan/info-clan.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { ContattiComponent } from './contatti/contatti.component';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
   path:'home',
   component: HomeComponent
  },
  {
    path: 'regolamento',
    component: RegolamentoComponent
  },
  {
    path: 'infoclan',
    component: InfoClanComponent
  },
  {
    path: 'aboutapp',
    component: AboutAppComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    ModealBasicComponent,
    UserDataComponent,
    RegolamentoComponent, 
    HomeComponent, InfoClanComponent, 
    AboutAppComponent, ContattiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule, HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
