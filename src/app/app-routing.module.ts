import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThreadDetailComponent} from './threads/thread-detail.component';
import {UserDetailComponent} from './users/user-detail.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'threads/:id', component: ThreadDetailComponent
  },
  {
    path: 'users/:id', component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
