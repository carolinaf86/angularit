import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThreadDetailComponent} from './thread/thread-detail.component';
import {UserDetailComponent} from './users/user-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
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
