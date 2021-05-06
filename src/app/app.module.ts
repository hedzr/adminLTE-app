import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppsiderbarComponent } from './appsiderbar/appsiderbar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppsiderbarComponent,
    AppfooterComponent,
    AppsettingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
