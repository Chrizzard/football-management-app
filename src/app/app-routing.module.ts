import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamInfoPageComponent } from './team-info-page/team-info-page.component';

const routes: Routes = [
  { path: 'teams/:id', component: TeamInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
