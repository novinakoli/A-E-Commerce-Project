import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topproducts',
  templateUrl: './topproducts.component.html',
  styleUrls: ['./topproducts.component.scss']
})
export class TopproductsComponent implements OnInit {
  @Input() item: any="";
  constructor() { }

  ngOnInit(): void {
  }

}
