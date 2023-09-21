import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-player-info-page',
  templateUrl: './player-info-page.component.html',
  styleUrls: ['./player-info-page.component.scss']
})
export class PlayerInfoPageComponent implements OnInit{

  // posts:any;
  newData:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      // this.service.getPosts()
      //   .subscribe(response => {
      //     this.posts = response;
      //   });
      this.service.getData().subscribe(response =>{
        this.newData=response;
      })
  }

}
