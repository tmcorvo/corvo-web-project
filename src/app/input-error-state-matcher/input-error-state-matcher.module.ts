import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ErrorStateMatcher} from '@angular/material/core';

import {
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
/** Error when invalid control is dirty, touched, or submitted. */
export class InputErrorStateMatcherModule implements ErrorStateMatcher { 
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
