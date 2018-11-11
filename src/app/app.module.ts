import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequirementsModule} from './shared/modules/requirements.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ThreadListItemComponent} from './threads/thread-list-item/thread-list-item.component';
import {ThreadDetailComponent} from './threads/thread-detail.component';
import {TimeDifferencePipe} from './shared/pipes/time-difference.pipe';
import {CommentComponent} from './comments/comment.component';
import { UserDetailComponent } from './users/user-detail.component';
import {UserDetailResolver} from './shared/resolvers/user-resolver.service';
import {UserService} from './shared/sdk/services/user.service';
import {httpInterceptorProviders} from './shared/http-interceptors';
import {ErrorService} from './shared/sdk/services/error.service';
import {VotesComponent} from './votes/votes.component';
import {ThreadService} from './shared/sdk/services/thread.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ThreadDetailComponent,
    ThreadListItemComponent,
    TimeDifferencePipe,
    CommentComponent,
    UserDetailComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequirementsModule,
    LayoutModule
  ],
  providers: [
    httpInterceptorProviders,
    TimeDifferencePipe,
    UserDetailResolver,
    UserService,
    ErrorService,
    ThreadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
