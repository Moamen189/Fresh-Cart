
import { Component } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
 export class RegisterComponent  {

  registerForm:FormGroup = new FormGroup ({
    name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]),
    rePassword: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/)]),
    phone: new FormControl(null , [Validators.required])

  })

  handlelRegister(registerForm:FormGroup){

    console.log(registerForm.value)

  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
