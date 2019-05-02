import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import {Approute} from './app.routing';
import {RouterModule} from '@angular/router';
import { NbThemeModule, NbBadgeModule, NbSpinnerModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {  FormsModule } from '@angular/forms';

import {HttpService} from './services/http/http.service';
import {UrlManagerService} from './services/url-manager/url-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout/layout.component';
import { SkyconsModule } from 'ngx-skycons';
import { LightboxModule } from "ngx-lightbox";
import {
  DxButtonModule,
  DxLoadPanelModule,
  DxCheckBoxModule
} from "devextreme-angular";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approute),
    NbThemeModule.forRoot(),
    NbBadgeModule,
    NbSpinnerModule,
    NbCardModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    SkyconsModule,
    LightboxModule,
    DxButtonModule,
    DxLoadPanelModule

  ],
  providers: [ HttpService, UrlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
