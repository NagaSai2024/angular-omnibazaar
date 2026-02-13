import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { SecondaryLayoutComponent } from './layouts/secondary-layout/secondary-layout.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { RegisterEmailPageComponent } from './features/auth/pages/register-email-page/register-email-page.component';
import { RegisterOtpPageComponent } from './features/auth/pages/register-otp-page/register-otp-page.component';
import { RegisterPasswordPageComponent } from './features/auth/pages/register-password-page/register-password-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            }
        ]
    },
    {
        path: '',
        component: SecondaryLayoutComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterEmailPageComponent},
            { path: 'register/otp', component: RegisterOtpPageComponent},
            { path: 'register/password', component: RegisterPasswordPageComponent}
        ]
    }
];
