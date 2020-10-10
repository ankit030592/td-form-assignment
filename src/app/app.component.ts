import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions:string[]=['Basic', 'Advance', 'Pro'];
  defaultValue:string = 'Advance'
  @ViewChild('f') formElement:NgForm;
  isFormSubmitted:boolean = false;

  userDetails={
    email: '',
    subscriptions: '',
    password: ''
  };


  onFormSubmit(){
    console.log(this.formElement.form);
    this.isFormSubmitted = true;
    this.userDetails.email = this.formElement.form.value.email;
    this.userDetails.subscriptions = this.formElement.form.value.subscriptions;
    this.userDetails.password = this.formElement.form.value.password;

  }
}