import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequirementsModule} from './shared/requirements.module';
import {HttpClientModule} from '@angular/common/http';
import {HeadersInterceptor} from './shared/http/headers-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequirementsModule
  ],
  providers: [HeadersInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
