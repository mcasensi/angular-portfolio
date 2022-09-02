import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageAlertsComponent } from './message-alerts/message-alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { MobilePortfolioComponent } from './mobile-portfolio/mobile-portfolio.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageAlertsComponent,
    BlogComponent,
    MobilePortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
