import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnavigation',
  templateUrl: './subnavigation.component.html',
  styleUrls: ['./subnavigation.component.scss']
})
export class SubnavigationComponent implements OnInit {
  @Input() title: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
