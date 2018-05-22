import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { GeneralDashboardComponent } from './_pages/general-dashboard/general-dashboard.component';
import { NavbarComponent } from './_pages/general-pages/navbar/navbar.component';
import { DashboardBodyComponent } from './_pages/general-dashboard/dashboard-body/dashboard-body.component';
import { TestPagesComponent } from './_pages/test-pages/test-pages.component';

import { PasswordComponent } from './_pages/general-dashboard/password/password.component';
import { OrganizeClassesComponent } from './_pages/general-dashboard/organize-classes/organize-classes.component';
import { BlockUsersComponent } from './_pages/general-dashboard/block-users/block-users.component';
import { RecordsComponent } from './_pages/general-dashboard/records/records.component';

import { ImageGalleryComponent } from './_pages/general-pages/image-gallery/image-gallery.component';
import { LandingPageComponent } from './_pages/general-pages/landing-page/landing-page.component';
import { CustomeRouter } from './app.routing';
import { Page404Component } from './_pages/general-pages/page404/page404.component';
import { Page500Component } from './_pages/general-pages/page500/page500.component';
import { LoginComponent } from './_pages/general-pages/login/login.component';

import { AdminDashboardComponent } from './_pages/admin-dashboard/admin-dashboard.component';
import { MasterDashboardComponent } from './_pages/master-dashboard/master-dashboard.component';


import { UserProfileComponent } from './_pages/general-dashboard/user-profile/user-profile.component';
import { SignupComponent } from './_pages/general-pages/signup/signup.component';


import {logincomponentservice} from './_pages/general-pages/login/login.component.service';



import { AdminDashboardBodyComponent } from './_pages/admin-dashboard/admin-dashboard-body/admin-dashboard-body.component';
import { AdminNavbarComponent } from './_pages/admin-dashboard/admin-navbar/admin-navbar.component';

import { AuthenticationComponent } from './_pages/general-pages/Authentication/authentication.component';


import {ConfigService} from './_services/config/config.service';
import { authenticationcomponentservice } from './_pages/general-pages/Authentication/authentication.component.service';
import {signupcomponentservice} from './_pages/general-pages/signup/signup.component.service';
import { navbarcomponentservice } from './_pages/general-pages/navbar/navbar.component.service';

import { AuthGuard } from './_routerGuards/auth/auth.guard';
import { UserService } from './_services/user/user.service';
import { MasterNavbarComponent } from './_pages/master-dashboard/master-navbar/master-navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    GeneralDashboardComponent,
    NavbarComponent,
    DashboardBodyComponent,
    PasswordComponent,
    OrganizeClassesComponent,
    BlockUsersComponent,
    RecordsComponent,
    ImageGalleryComponent,
    TestPagesComponent,
    LandingPageComponent,
    Page404Component,
    Page500Component,
    LoginComponent,
    AdminDashboardComponent,
    MasterDashboardComponent,
    DashboardBodyComponent,
    PasswordComponent,
    OrganizeClassesComponent,
    BlockUsersComponent,
    RecordsComponent,
    ImageGalleryComponent,
    TestPagesComponent,
    UserProfileComponent,
    SignupComponent,
    AdminDashboardBodyComponent,
    AdminNavbarComponent,
    AuthenticationComponent,
    MasterNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomeRouter,
    HttpModule

  ],

  providers: [
    ConfigService,
    logincomponentservice,
    navbarcomponentservice,

    authenticationcomponentservice,
    signupcomponentservice,
    authenticationcomponentservice,
    AuthGuard,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
