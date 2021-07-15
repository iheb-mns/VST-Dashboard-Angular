import { Routes } from "@angular/router";

import { TestComponent } from "./pages/test/test.component";

import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { AuthGuard } from "../app/helpers/auth.guard";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";



export const AppRoutes: Routes = [
  { path: "log-in", component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full", 
    //canActivate: [AuthGuard]
  },
  {
    path: "", canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule", 
          //canActivate: [AuthGuard]
      },
      
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard", 
    //canActivate: [AuthGuard]
  },

];
