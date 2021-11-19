import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-tutorial',
  templateUrl: './forms-tutorial.component.html',
  styleUrls: ['./forms-tutorial.component.scss'],
})
export class FormsTutorialComponent implements OnInit {
  constructor() { }

  isSubmitted: Boolean = false;
  invalid: boolean = true;

  loginform = new FormGroup({
    firstname: new FormControl('', [Validators.required,this.validateUserName]),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
  });

  validateUserName(control:AbstractControl):ValidationErrors | null {
    if (control.value.toString().startsWith('a')) {
      return {invalid:true};
    } else {
      return null;
    }
  }

  ngOnInit(): void { }

  onSubmit() {
    this.isSubmitted = true;
    // this.invalid= true;
    console.log(this.loginform);
  }
}
