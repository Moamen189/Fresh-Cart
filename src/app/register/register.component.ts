
import { Component } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
 export class RegisterComponent  {
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  isLoading:boolean = false;
  registerForm:FormGroup = new FormGroup ({
    name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]),
    rePassword: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]),
    phone: new FormControl(null , [Validators.required])

  })

  handlelRegister(registerForm:FormGroup){
    this.isLoading = true;
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({

        next: (response) => {


          this.isLoading = false;
            this._Router.navigate(['/login'])


        },
        error: (err) => {
          this.isLoading = false;
          this._Router.navigate(['/login'])
        }
      })
    }



  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
