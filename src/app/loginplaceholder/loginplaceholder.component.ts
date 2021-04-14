import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-loginplaceholder',
  templateUrl: './loginplaceholder.component.html',
  styleUrls: ['./loginplaceholder.component.css']
})
export class LoginplaceholderComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  /**
   * Handle form submission.
   *
   * @param {Event} event
   * @memberof LoginplaceholderComponent
   */
  public onSubmit(event: Event): void {
    if (this.form.valid) {
      // console.log('VALID', this.form.value);
      const values = {...this.form.value.login}
      console.log(values);
    } else {
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
    this.form = this.formBuilder.group({
      login: [],
    });
  }
}
