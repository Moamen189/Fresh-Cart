
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:any = null;

  constructor(private _CartService:CartService) { }

  ngOnInit(): void {

    this._CartService.GetLoggedUserCart().subscribe({
      next:(res) =>{this.cartDetails = res.data },
      error:(err) => err.data
    })

  }

}
