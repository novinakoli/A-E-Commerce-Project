import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res)=> {
      console.log("res==>", res)
    })
  }

}
