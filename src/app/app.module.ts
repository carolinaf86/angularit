import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequirementsModule} from './shared/modules/requirements.module';
import {HttpClientModule} from '@angular/common/http';
import {HeadersInterceptor} from './shared/http/headers-interceptor.service';
import {HomeComponent} from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ThreadListItemComponent} from './thread/thread-list-item/thread-list-item.component';
import {ThreadDetailComponent} from './thread/thread-detail.component';
import {TimeDifferencePipe} from './shared/pipes/time-difference.pipe';
import {CommentComponent} from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ThreadDetailComponent,
    ThreadListItemComponent,
    TimeDifferencePipe,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequirementsModule,
    LayoutModule
  ],
  providers: [HeadersInterceptor, TimeDifferencePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
