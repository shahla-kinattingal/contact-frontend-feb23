import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  // all-contact http://localhost:4200/
  {
    path:'',component:AllContactComponent
  },
  // add-contact http://localhost:4200/add-contact
  {
    path:'add-contact',component:AddContactComponent
  },
  // view-contact http://localhost:4200/view-contact
  {
    path:'view-contact/:id',component:ViewContactComponent
  },
  // edit-contact http://localhost:4200/edit-contact
  {
    path:'edit-contact/:id',component:EditContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
