import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequirementsModule} from './shared/modules/requirements.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {LayoutModule} from '@angular/cdk/layout';
import {NavbarComponent} from './navbar/navbar.component';
import {ThreadListItemComponent} from './threads/thread-list-item/thread-list-item.component';
import {ThreadDetailComponent} from './threads/thread-detail.component';
import {TimeDifferencePipe} from './shared/pipes/time-difference.pipe';
import {CommentComponent} from './comments/comment.component';
import {UserDetailComponent} from './users/user-detail.component';
import {httpInterceptorProviders} from './shared/http-interceptors';
import {VotesComponent} from './votes/votes.component';
import {LoginComponent} from './login/login.component';
import {FormlyModule} from '@ngx-formly/core';
import {RegisterComponent} from './register/register.component';
import {FORMLY_CONFIG, FormlyTypesModule} from './shared/formly/formlyTypes.module';
import {SafeHtmlPipe} from './shared/pipes/safe-html.pipe';
import {TruncatePipe} from './shared/pipes/truncate.pipe';

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
    VotesComponent,
    LoginComponent,
    RegisterComponent,
    SafeHtmlPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequirementsModule,
    LayoutModule,
    FormlyModule.forRoot(FORMLY_CONFIG),
    FormlyTypesModule
  ],
  providers: [
    httpInterceptorProviders,
    TimeDifferencePipe,
    SafeHtmlPipe,
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
