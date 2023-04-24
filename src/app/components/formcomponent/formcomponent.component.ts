import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.sass'],
})
export class FormcomponentComponent {
  checkForm: any;
  formGroup: FormGroup | undefined;
  formErrorState: boolean = false;
  formErrorMessage: string = 'Please provide a valid email';
  constructor(private formBuilder: FormBuilder) {
    this.checkForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    if (this.checkForm.valid) {
      this.formErrorState = false
    } else {
      this.formErrorState = true
    }
  }
}
