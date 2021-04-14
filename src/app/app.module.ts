import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSnackBarModule, MatIconModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import { FormholderComponent } from './formholder/formholder.component';
import { LoginComponent } from './login/login.component';
import { LoginplaceholderComponent } from './loginplaceholder/loginplaceholder.component';
import { ConverthtmltopdfComponent } from './converthtmltopdf/converthtmltopdf.component';
import { FormsModule } from '@angular/forms';
import { DropdownselectformComponent } from './dropdownselectform/dropdownselectform.component';
import { FormspraticeComponent } from './formspratice/formspratice.component';
import { CurdoperationsComponent } from './curdoperations/curdoperations.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormholderComponent,
    LoginComponent,
    LoginplaceholderComponent,
    ConverthtmltopdfComponent,
    DropdownselectformComponent,
    FormspraticeComponent,
    CurdoperationsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    SignupComponent,
    FormholderComponent,
    LoginComponent,
    LoginplaceholderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
