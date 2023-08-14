import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Contactschema } from 'src/model/contact-schema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contactschema={}
  allGroups:any=[]

  constructor(private editRoute:ActivatedRoute,private api:ApiService,private navigate:Router){}
  ngOnInit(): void {
    this.editRoute.params.subscribe({
      next:(parameter:any)=>{
        console.log(parameter);
        // destructure the parameter
        const {id}= parameter
        console.log(id);
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
            
          }
        })
        // make a call to service to gell all group
        this.api.getGroups().subscribe({
          next:(res:any)=>{
            console.log(res);
            this.allGroups=res
            
          }
        })
        

        
      }
    })
  }

   

  updatecontact(id:any,contact:any){
    // api call
    this.api.editcontact(id,contact).subscribe({
       next:(res:any)=>{
        alert("successfully updated")
        this.navigate.navigateByUrl("")

       }
    }
      

      
    )
  }

}


