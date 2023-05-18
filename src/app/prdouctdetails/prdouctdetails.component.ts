import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-prdouctdetails',
  templateUrl: './prdouctdetails.component.html',
  styleUrls: ['./prdouctdetails.component.css']
})
export class PrdouctdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService) { }
  ProductId:any;
  ProductData:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.ProductId = params.get('id')
    })

    this._ProductsService.getProductDetails(this.ProductId).subscribe({
      next: (response) => this.ProductData = response.data
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
        items: 1
      },
    },
    nav: true
  }

}
