import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatchesSideBarComponent } from './matches-side-bar/matches-side-bar.component';
import { LogoComponent } from './logo/logo.component';
import { MatchesSideBarElementComponent } from './matches-side-bar/matches-side-bar-element/matches-side-bar-element.component';
import { TeamInfoPageComponent } from './team-info-page/team-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamInfoPageModule } from './team-info-page/team-info-page.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatchesSideBarComponent,
    LogoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TeamInfoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
