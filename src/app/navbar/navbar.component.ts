
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false ;
  constructor(private _AuthService:AuthService ) {
    this._AuthService.userData.subscribe ({
      next:() =>{

        if(_AuthService.userData.getValue() == null){
          this.isLogin = true
        }else{
          this.isLogin = false
        }

      }
    })

  }

  ngOnInit(): void {
  }

  CallLogOut(){
    this._AuthService.logOut();
  }

}
