import { Component, OnInit } from '@angular/core';
import { Contactschema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contactschema={}
  groups:any=[]
  errorMsg: any;
  constructor(private api:ApiService, private addContactRouter:Router){
    this.contact.groupId="select a group"
  }
  ngOnInit():void{
    this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups=response
        
      },
      error: (err:any) => {
        console.log(err.message);

       this.errorMsg=err.message


  }})
  }
  addContacts(contact:Contactschema){
    this.api.addContacts(contact).subscribe({
       next:(response:any)=>{
        // data added into server
        console.log(response);
        // navigate to all contact page
        this.addContactRouter.navigateByUrl('')
        
       },
       error: (err:any) => {
        console.log(err.message);

       this.errorMsg=err.message
       }
    })
  }
}
