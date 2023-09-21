import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TeamInfoPageComponent } from './team-info-page.component';


@NgModule({
  declarations: [TeamInfoPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TeamInfoPageModule { }
