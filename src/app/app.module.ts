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
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamsModule } from './teams/teams.module';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PlayerModule } from './players/players.module';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatchesSideBarComponent,
    LogoComponent,
    PlayerInfoPageComponent,
    RegistrationComponent,
    LoginComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TeamsModule,
    SharedModule,
    FormsModule,
    PlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
