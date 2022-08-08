import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  @Input() title: string = "";
  @Input() image: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
