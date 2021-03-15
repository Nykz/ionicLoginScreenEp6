import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  form: FormGroup

  constructor() { 
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
  }

}
