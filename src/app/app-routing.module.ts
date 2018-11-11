import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThreadDetailComponent} from './threads/thread-detail.component';
import {UserDetailComponent} from './users/user-detail.component';
import {UserDetailResolver} from './shared/resolvers/user-resolver.service';
import {UserThreadsResolverService} from './shared/resolvers/user-threads-resolver.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'threads/:id', component: ThreadDetailComponent
  },
  {
    path: 'users/:id', component: UserDetailComponent, resolve: { user: UserDetailResolver, threads: UserThreadsResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
