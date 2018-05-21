
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LandingPageComponent } from './_pages/general-pages/landing-page/landing-page.component';
import { LoginComponent } from './_pages/general-pages/login/login.component';
import { SignupComponent } from './_pages/general-pages/signup/signup.component';
import { GeneralDashboardComponent } from './_pages/general-dashboard/general-dashboard.component';

import { DashboardBodyComponent} from './_pages/general-dashboard/dashboard-body/dashboard-body.component';
// import {AuthenticationComponent} from './_pages/general-pages/Authentication/authentication.component';
import {AuthenticationComponent} from './_pages/general-pages/Authentication/authentication.component'

import { AuthGuard } from './_routerGuards/auth/auth.guard';

export const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },

    { path: 'landing', component: LandingPageComponent },
    // { path: 'login', component: LoginComponent },AuthenticationComponent
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'Authentication', component: AuthenticationComponent },

    {
        path: 'dashboard',
        component:GeneralDashboardComponent,
        canActivate:[AuthGuard],
        children:[
            {path:'',component:SignupComponent},
            // {path:'dashboard/DashboardBody',component:DashboardBodyComponent}
        ]
    }
    // {path:'**',component:''}
]

export const CustomeRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);