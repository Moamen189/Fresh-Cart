
import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
 export class RegisterComponent  {

  registerForm:FormGroup = new FormGroup ({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    Phone: new FormControl(null),

  })

  // constructor() { }

  // ngOnInit(): void {
  // }

}
