import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequirementsModule} from './shared/requirements.module';
import {HttpClientModule} from '@angular/common/http';
import {HeadersInterceptor} from './shared/http/headers-interceptor.service';
import {HomeComponent} from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import {NavbarComponent} from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequirementsModule,
    LayoutModule
  ],
  providers: [HeadersInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
