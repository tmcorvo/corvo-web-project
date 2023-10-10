import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputErrorStateMatcherModule } from '../input-error-state-matcher/input-error-state-matcher.module';
@Component({
  selector: 'register',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent {

  uname = new FormControl('', [Validators.required]);
  psswd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  cfrmpsswd = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  hidepsswd = true;
  hidecfrmpsswd = true;

  psswdsMatch = true;

  matcher = new InputErrorStateMatcherModule();

  onChange(event: any): void{
    if(this.psswd.value == this.cfrmpsswd.value){
      this.psswdsMatch = true;
    } else{
      this.psswdsMatch = false;
    }
    console.log(this.psswdsMatch);
  }

  onSubmit(): void{
    console.log("Form Submitted");
  }
}
