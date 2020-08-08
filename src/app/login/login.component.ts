import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    user:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    password:['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(controlName)
  {
    return this.loginForm.get(controlName).errors;
    
  }
  getControl(controlName)
  {
    return this.loginForm.get(controlName);
  }
}
