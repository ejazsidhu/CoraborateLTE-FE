import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
<<<<<<< HEAD


import { ImageGalleryComponent } from './_pages/general-pages/image-gallery/image-gallery.component';



=======
import { UserProfileComponent } from './_pages/general-dashboard/user-profile/user-profile.component';
>>>>>>> navbar and header implemented


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
<<<<<<< HEAD

   ImageGalleryComponent,


   TestPagesComponent
 
=======
   UserProfileComponent
  
>>>>>>> navbar and header implemented

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
