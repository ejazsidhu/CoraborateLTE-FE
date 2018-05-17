
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LandingPageComponent } from './_pages/general-pages/landing-page/landing-page.component';
import { LoginComponent } from './_pages/general-pages/login/login.component';
import { SignupComponent } from './_pages/general-pages/signup/signup.component';
import { GeneralDashboardComponent } from './_pages/general-dashboard/general-dashboard.component';
export const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },

    { path: 'landing', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    {
        path: 'dashboard',
        component:GeneralDashboardComponent,
        children:[
            {path:'',component:SignupComponent}
        ]
    }
    // {path:'**',component:''}
]

export const CustomeRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);