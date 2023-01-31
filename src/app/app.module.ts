import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorksComponent } from './works/works.component';
import {HttpClientModule} from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BodyComponent } from './body/body.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WorksComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    BodyComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
