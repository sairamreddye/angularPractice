import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-formholder',
  templateUrl: './formholder.component.html',
  styleUrls: ['./formholder.component.css']
})
export class FormholderComponent implements OnInit {
  public form: FormGroup;
  bool: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  /**
   * Handle form submission.
   *
   * @param {Event} event
   * @memberof signupFormholderComponent
   */
  public onSubmit(event: Event): void {
    debugger
    if (this.form.valid && this.bool === false) {
      // console.log('VALID', this.form.value);
      const values = {...this.form.value.login,...this.form.value.signup}
      console.log(values);
    } 
    else if(this.form.valid && this.bool === true){
      const values = {...this.form.value.login}
      console.log(values);
    }
    else {
      console.log('INVALID', this.form.value);

      Object.keys(this.form.controls).forEach((controlName) => {
        console.log('SHOW_ERRORS', controlName);
        const control = this.form.get(controlName);

        // ISSUE: Nothing changes on the element still 
        // ng-untouched, and was expecting it to be 
        // ng-touched
        control.markAllAsTouched();
      });
    }
  }

  public ngOnInit() {
    this.bool = this.router.url.split('/').some(valid => valid === 'login');
    debugger
    if(this.bool === true){
      this.form = this.formBuilder.group({
        login: [],
      });
    }
      this.form = this.formBuilder.group({
        login: [],
        signup: []
      });
  }
}
