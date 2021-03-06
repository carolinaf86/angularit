import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThreadDetailComponent} from './threads/thread-detail.component';
import {UserDetailComponent} from './users/user-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserDetailResolver} from './shared/resolvers/user-resolver.service';
import {UserThreadsResolverService} from './shared/resolvers/user-threads-resolver.service';
import {ThreadsResolverService} from './shared/resolvers/threads-resolver.service';
import {ThreadResolverService} from './shared/resolvers/thread-resolver.service';
import {UserCommentsResolverService} from './shared/resolvers/user-comments-resolver.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, resolve: {threads: ThreadsResolverService}
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'threads/:id', component: ThreadDetailComponent, resolve: {thread: ThreadResolverService}
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve:
      {
        user: UserDetailResolver,
        threads: UserThreadsResolverService,
        comments: UserCommentsResolverService
      }
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
