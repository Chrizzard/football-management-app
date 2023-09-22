import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerImageComponent } from './player-image/player-image.component';



@NgModule({
  declarations: [
    PlayerImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlayerImageComponent
  ]
})
export class SharedModule { }
