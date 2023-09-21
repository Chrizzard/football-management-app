import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';

const routes: Routes = [
  { path: 'players/:id', component: PlayerInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
