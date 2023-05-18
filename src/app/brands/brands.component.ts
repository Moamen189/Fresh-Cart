import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  Brands:any[] =[]
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next:(response) =>this.Brands = response.data
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },
    },
    nav: true
  }
}
