
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LandingPageComponent } from './_pages/general-pages/landing-page/landing-page.component';
import { LoginComponent } from './_pages/general-pages/login/login.component';
import { SignupComponent } from './_pages/general-pages/signup/signup.component';
import { GeneralDashboardComponent } from './_pages/general-dashboard/general-dashboard.component';
import { DashboardBodyComponent } from './_pages/general-dashboard/dashboard-body/dashboard-body.component';
import { AuthenticationComponent } from './_pages/general-pages/Authentication/authentication.component'
import { LoggedInAuthGuard } from './_routerGuards/logged-in-auth/logged-in-auth.guard';
import { AuthenticationAuthGuard } from './_routerGuards/authentication-auth/authentication-auth.guard';

import { OrganizeClassesComponent } from './_pages/general-dashboard/organize-classes/organize-classes.component'
import { PasswordComponent } from './_pages/general-dashboard/password/password.component';
import { AuthGuard } from './_routerGuards/auth/auth.guard';
import { forgetPasswordComponent } from './_pages/general-pages/forget-password/forget-password.component';

import { ProfileComponent } from './_pages/general-pages/profile/profile.component';






import { RecordsComponent } from './_pages/general-dashboard/records/records.component';
import { UserProfileComponent } from './_pages/general-dashboard/user-profile/user-profile.component';

export const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'landing',
        component: LandingPageComponent,
        canActivate: [LoggedInAuthGuard]
    },

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedInAuthGuard]
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthenticationAuthGuard, LoggedInAuthGuard,]
    },
    {
        path: 'Authentication', component: AuthenticationComponent
    },
    {
        path: 'ForgetPassword', component: forgetPasswordComponent
    },





    // { path: 'landing', component: LandingPageComponent },

    // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
    // { path: 'Authentication', component: AuthenticationComponent },
    // {path: 'ForgetPassword', component: forgetPasswordComponent },
    // // {path: 'OrganizeClasses', component: AuthenticationComponent},

    {
        path: 'dashboard',
        component: GeneralDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: SignupComponent },
            { path: 'dashboardbody/:Id', component: DashboardBodyComponent },
            { path: 'OrganizeClasses', component: OrganizeClassesComponent },
            { path: 'ChangePassword', component: PasswordComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'change-password', component: PasswordComponent },
            { path: 'DownloadRecord', component: RecordsComponent },
            { path: 'Profile', component: UserProfileComponent },
        ]
    }
]

export const CustomeRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);