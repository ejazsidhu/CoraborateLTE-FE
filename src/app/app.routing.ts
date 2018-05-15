
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LandingPageComponent } from './_pages/general-pages/landing-page/landing-page.component';
import { LoginComponent } from './_pages/general-pages/login/login.component';
export const appRoutes: Routes = [

    {
        path: '',
        redirectTo:'landing',
        pathMatch:'full'
    },
    {path:'landing',component:LandingPageComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:LandingPageComponent},

    // {path:'**',component:''}
]



export const CustomeRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);