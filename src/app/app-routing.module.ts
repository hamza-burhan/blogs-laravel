import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './views/home/home.component';

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
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login' // Redirect unknown paths to 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
