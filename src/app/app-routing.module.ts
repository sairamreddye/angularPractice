import { CurdoperationsComponent } from './curdoperations/curdoperations.component';
import { FormspraticeComponent } from './formspratice/formspratice.component';
import { DropdownselectformComponent } from './dropdownselectform/dropdownselectform.component';
import { ConverthtmltopdfComponent } from './converthtmltopdf/converthtmltopdf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormholderComponent } from './formholder/formholder.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  },
  {
    path:'signup',
    component:FormholderComponent
  },
  {
    path:'login',
    // component:LoginplaceholderComponent
    component:FormholderComponent
  },
  {
    path:'converthtml',
    component:ConverthtmltopdfComponent
  },
  {
    path: 'dropdownselectform',
    component:DropdownselectformComponent
  },
  {
    path:'formspractice',
    component:FormspraticeComponent
  },
  {
    path:'curdopertaions',
    component: CurdoperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
