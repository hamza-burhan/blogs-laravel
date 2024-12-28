import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirect empty path to 'login'
    pathMatch: 'full'    // Ensures exact match of empty path
  },
  {
      path: 'login',
      component: LoginComponent // Render LoginComponent for the 'login' route
  },
  {
      path: '**',
      redirectTo: 'login' // Redirect unknown paths to 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
