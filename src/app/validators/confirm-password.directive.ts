import { Directive } from '@angular/core';

@Directive({
  selector: '[appConfirmPassword]'
})
export class ConfirmPasswordDirective {

  constructor() { }

}
export function ConfirmPassword(control) {
  if(control.value.password == control.value.confirmpassword){
    return null;
}
return { confirmpassword :true};
}