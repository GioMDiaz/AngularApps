import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,3}$';

  constructor() {}

  passwordMatch(value1: string, value2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(value1)?.value;
      const pass2 = formGroup.get(value2)?.value;

      if (pass1 !== pass2) {
    
        formGroup.get(value2)?.setErrors({ notMatch: true });
        return { notMatch: true };
      }

      formGroup.get(value2)?.setErrors(null);

      return null;
    };
  }
}