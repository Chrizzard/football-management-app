import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-image',
  templateUrl: './player-image.component.html',
  styleUrls: ['./player-image.component.scss']
})
export class PlayerImageComponent implements OnInit{
  @Input() src!: string;
  @Input() alt!: string;

  constructor(){}

  ngOnInit(): void {
    
  }
}
