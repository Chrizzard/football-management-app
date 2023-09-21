import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private testUrl = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:8080/players/1'
  // private singleObjectUrl = 'http://ip.jsontest.com/'

  constructor(private httpClient: HttpClient) { }
  
  // getPosts(){
  //   return this.httpClient.get(this.testUrl);
  // }

  getData(){
    return this.httpClient.get(this.url)
  }
}
