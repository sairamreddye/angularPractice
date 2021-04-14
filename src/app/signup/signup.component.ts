import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor } from '@angular/forms';

import { Subscription } from 'rxjs';

export interface signup {
  useremail:any;
  userphnnumber:number;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignupComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SignupComponent),
      multi: true
    }
  ]
})
export class SignupComponent implements ControlValueAccessor, OnInit, OnDestroy  {
  public form: FormGroup;
  public subscriptions: Subscription[] = [];

  public hide = true;

  public onChange: any = () => { };
  public onTouched: any = () => { };

  constructor(
    private fb: FormBuilder
  ) { }

  public get useremail(): FormControl {
    return this.form.get('useremail') as FormControl;
  }
  public get userphnnumber(): FormControl {
    return this.form.get('userphnnumber') as FormControl;
  }
  public get value(): signup {
    return this.form.value;
  }

  public set value(value: signup) {
    this.form.setValue(value, { emitEvent: false });
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  public validate(_: FormControl) {
    return (this.form.valid) ? null : { signup: { valid: false } };
  }

  public ngOnInit() {
    this.createFormInstance();

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private createFormInstance() {
    this.form = this.fb.group({
      useremail: [
        '',
        [Validators.required,Validators.email]
      ],
      userphnnumber: [
        '',
        [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
      ],
    });
  }
}


// username: string;
 // password: string;
  // username: [
      //   '',
      //   [Validators.required]
      // ],
      // password: [
      //   '',
      //   [Validators.required]
      // ],
      // public get username(): FormControl {
  //   return this.form.get('username') as FormControl;
  // }

  // public get password(): FormControl {
  //   return this.form.get('password') as FormControl;
  // }