import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-formspratice',
  templateUrl: './formspratice.component.html',
  styleUrls: ['./formspratice.component.css']
})
export class FormspraticeComponent implements OnInit {
  submitted = false;

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef) { }

  registrationForm = this.fb.group({
   
    fullName: this.fb.group({
      firstName: ["",[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[_A-z0-9]*((-|s)*[_A-z0-9])*$")
        ]],
      lastName: ["", [Validators.required]]
    }),

      phoneNumber: ["",[Validators.required]],

      address: this.fb.group({
        permanentAddress: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        temporaryAddress: ["",[Validators.required]]
      }),

      password: this.fb.group({
         password: ["",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
         confirmPassword:["",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]]
      })
  });

  ngOnInit(){ }


  // Getter method to access formcontrols
  get myForm() {
    return this.registrationForm.controls;
  }

  // Submit Registration Form
  onSubmit() {
    console.log(this.registrationForm.controls);
    this.submitted = true;
    if (!this.registrationForm.valid && this.myForm.password.get('confirmPassword').value === this.myForm.password.get('password').value) {
      return false;
    } else {
      debugger
      console.log(this.registrationForm.value);
    }
  }
}
