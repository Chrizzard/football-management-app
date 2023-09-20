import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatchesSideBarComponent } from './matches-side-bar/matches-side-bar.component';
import { LogoComponent } from './logo/logo.component';
import { MatchesSideBarElementComponent } from './matches-side-bar/matches-side-bar-element/matches-side-bar-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatchesSideBarComponent,
    LogoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
