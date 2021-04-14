import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdownselectform',
  templateUrl: './dropdownselectform.component.html',
  styleUrls: ['./dropdownselectform.component.css']
})
export class DropdownselectformComponent implements OnInit {
  type: any;
  registerForm: FormGroup;
  activate: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.type = "Agriculture";
    // this.activate = true;
    this.registerForm = this.formBuilder.group({
      // Agriculture: this.formBuilder.group({
        Survey_No: ['', Validators.required],
        Land_in_Acres: ['', Validators.required],
        //  })
  });
  }

  select_main_button(event){
    this.type = event.target.value;
      console.log(this.type);
         if(this.type === "Agriculture"){
      this.registerForm = this.formBuilder.group({
        // Agriculture: this.formBuilder.group({
          Survey_No: ['', Validators.required],
          Land_in_Acres: ['', Validators.required],
          //  })
    });
           }
           else if(this.type === "FD"){
            this.registerForm = this.formBuilder.group({
                //  FD: this.formBuilder.group({
                  FD_Account_number: ['', Validators.required],
                  FD_Name: ['', Validators.required],
              // })
          });
           }
  }

  get f() { return this.registerForm.controls; }
      
  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("not valid");
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
