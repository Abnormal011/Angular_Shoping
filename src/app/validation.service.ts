import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  fieldValidationText!: string;

  constructor() { }

  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  getValidationTextBasedOnType(type:any): string {
    if (type == 'MANDT') this.fieldValidationText = 'This field is required';
    else if (type == 'EMAIL') this.fieldValidationText = 'Enter valid Email';
    else if (type == 'MOBILE')
      this.fieldValidationText = 'Enter valid Mobile Number';
    else if (type == 'TELEPHONE')
      this.fieldValidationText = 'Enter valid Telephone Number';
    else this.fieldValidationText = 'This field is required';

    return this.fieldValidationText;
  }

}
