import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecontainer',
  templateUrl: './homecontainer.component.html',
  styleUrls: ['./homecontainer.component.scss']
})
export class HomecontainerComponent implements OnInit {
  collections: any = [
    {
      title: "Laptop Collection",
      image: "assets/product08.png"
    },
    {
      title: "Accessories Collection",
      image: "assets/product05.png"
    },
    {
      title: "Cameras Collection",
      image: "assets/product09.png"
    },
    {
      title: "Mobile Collection",
      image: "assets/product07.png"
    }
  ];
  sub_navigation: any=[
    {
      title: "NEW PRODUCTS"
    },
  ]
  sub_navigation2: any=[
    {
      title: "TOP SELLING"
    },
  ]
  categories: any =[
    {
      title: "LAPTOPS",
      image: "assets/product01.png",
      is30Per: true,
      isNew: true,
      isStarVisible: true,
      noOfStars: 5,
      lineVisible: false
    },
    {
      title: "HEADPHONES",
      image: "assets/product02.png",
      is30Per: false,
      isNew: true,
      isStarVisible: true,
      noOfStars: 4,
      lineVisible: false
    },
    {
      title: "LAPTOPS",
      image: "assets/product03.png",
      is30Per: true,
      isNew: false,
      isStarVisible: false,
      noOfStars: 5,
      lineVisible: true
    },
    {
      title: "TABLETS",
      image: "assets/product04.png",
      is30Per: false,
      isNew: false,
      isStarVisible: true,
      noOfStars: 5,
      lineVisible: false
    }
  ];

  categories2: any =[
    {
      title: "LAPTOPS",
      image: "assets/product06.png",
      is30Per: true,
      isNew: true,
      isStarVisible: true,
      noOfStars: 5,
      lineVisible: false
    },
    {
      title: "MOBILES",
      image: "assets/product07.png",
      is30Per: false,
      isNew: true,
      isStarVisible: true,
      noOfStars: 4,
      lineVisible: false
    },
    {
      title: "LAPTOPS",
      image: "assets/product08.png",
      is30Per: true,
      isNew: false,
      isStarVisible: false,
      noOfStars: 5,
      lineVisible: true
    },
    {
      title: "CAMERAS",
      image: "assets/product09.png",
      is30Per: false,
      isNew: false,
      isStarVisible: true,
      noOfStars: 5,
      lineVisible: false
    }
  ];
  topproducts: any=[
    {
      title: "TOP SELLING",
      image: "assets/product07.png"

    },
    {
      title: "TOP SELLING",
      image: "assets/product08.png"
    },
    {
      title: "TOP SELLING",
      image: "assets/product09.png"
    },
    {
      image: "assets/product04.png"
    },
    {
      image: "assets/product05.png"
    },
    {
      image: "assets/product06.png"
    },
    {
      image: "assets/product01.png"
    },
    {
      image: "assets/product02.png"
    },
    {
      image: "assets/product03.png"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
