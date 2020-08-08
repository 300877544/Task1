import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmPassword } from '../validators/confirm-password.directive';
import { Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    mobile:['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
    password:['', [Validators.required, Validators.minLength(6)]],
    confirmpassword:['', [Validators.required, Validators.minLength(6)]],
  }, { validators : ConfirmPassword}) 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(controlName)
  {
    return this.registerForm.get(controlName).errors;
    
  }
  getControl(controlName)
{
  return this.registerForm.get(controlName);
}
}
