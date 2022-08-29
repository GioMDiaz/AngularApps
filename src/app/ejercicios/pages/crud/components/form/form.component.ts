import { EmailValidatorService } from './../../validators/email-validator.service';
import { ValidatorService } from './../../validators/validator.service';
import { User } from './../../interfaces/user';

import { CrudService } from './../../services/crud.service';
import { Country } from './../../interfaces/country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorService } from '../../services/behavior.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private behaviorService: BehaviorService,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  countries: Country[] = [];

  user!: User;

  editId!: string;

  readonlyControl: boolean = false;

  ngOnInit(): void {
    this.crudService.getCountries().subscribe((resp) => {
      this.countries = resp.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
    });
  }

  myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordConfirm: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
      subscribed: [false, []],
      country: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(2)]],
    },
    {
      validators: [
        this.validatorService.passwordMatch('password', 'passwordConfirm'),
      ],
    }
  );

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    } else if (!this.user) {
      const formValue = { ...this.myForm.value };

      delete formValue.passwordConfirm;

      this.crudService.addUser(formValue).subscribe((data) => {
        this.behaviorService.changeDataSub(data);
      });
      this.clearForm();
      
    } else if (this.user) {
      const editValue = { ...this.myForm.value };

      this.crudService.updateUser(editValue, this.editId).subscribe((data) => {
        this.behaviorService.changeDataSub(data);
      });
      this.clearForm();
    }
  }

  get emailErrorMsg() {
    const errors = this.myForm.get('email')?.errors;
    const email = this.myForm.get('email')?.value;
    

    if (errors?.['required']) {
      return 'Este campo no puede estar vacio.';
    } else if (errors?.['pattern']) {
      return 'Esta no es una dirección de correo válida.';
    } else if (errors?.['emailExist']) {
      return `La direccion ${email} esta en uso.`;
    } else return 'Error desconocido.';
  }

  clearForm() {
    this.myForm.reset();
    this.emailValidator.originalMail = null;
  }
  editValue(value: any) {
    this.editId = value.id;
    this.user = value;
    delete value.passwordConfirm;
    this.emailValidator.originalMail = value.email;
    this.readonlyControl = true;
    this.myForm.patchValue(value);
  }

  validValue(value: string) {
    return (
      this.myForm.controls[value]?.invalid &&
      this.myForm.controls[value]?.touched
    );
  }
}