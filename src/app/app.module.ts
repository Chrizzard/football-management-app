import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatchesSideBarComponent } from './matches-side-bar/matches-side-bar.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MatchesSideBarElementComponent } from './matches-side-bar/matches-side-bar-element/matches-side-bar-element.component';
import { PlayersComponent } from './players/players.component';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamsModule } from './teams/teams.module';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatchesSideBarComponent,
    LogoComponent,
    PlayersComponent,
    PlayerCardComponent,
    PlayerInfoPageComponent,
    RegistrationComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TeamsModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
