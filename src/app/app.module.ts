import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { GeneralDashboardComponent } from './_pages/general-dashboard/general-dashboard.component';
import { NavbarComponent } from './_pages/general-pages/navbar/navbar.component';
import { DashboardBodyComponent } from './_pages/general-dashboard/dashboard-body/dashboard-body.component';




@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    GeneralDashboardComponent,
    NavbarComponent,
   DashboardBodyComponent
  

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
