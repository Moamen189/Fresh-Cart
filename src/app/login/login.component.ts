import { Component } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private _AuthService:AuthService , private _Router:Router) {
    if(localStorage.getItem('userToken') !== null){
      this._Router.navigate(['/home'])
    }else{
      //this._Router.navigate(['/login'])

      this._Router.navigate(['/login'])
    }
  }
  isLoading:boolean = false;
  //apiError:string = '';
  loginForm:FormGroup = new FormGroup ({
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]),


  })

  handlelLogin(loginForm:FormGroup){
    this.isLoading = true;
    if(loginForm.valid){
      this._AuthService.Login(loginForm.value).subscribe({

        next: (response) => {


          this.isLoading = false;
          localStorage.setItem('userToken' , response.token)
          this._AuthService.decodedUserData()
            this._Router.navigate(['/home'])


        },
        error: (err) => {
          this.isLoading = false;
          this._Router.navigate(['/home'])
          //this.apiError = err.error.errors.msg
        }
      })
    }
  }
}





