import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Contactschema } from 'src/model/contact-schema';
import { ViewContactComponent } from '../view-contact/view-contact.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addContact(contact: Contactschema) {
    throw new Error('Method not implemented.');
  }

  BASE_URL='http://localhost:3000'

  // service constructor

  constructor(private http :HttpClient) { }

  // handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    if(error.error){
      // client error
      errorMsg=`Error:${error.message}`

    }
    // server error
    else{
      errorMsg=`status:${error.status}\n
      Error:${error.message}`
    }
    return throwError(()=>errorMsg)
  }



  // api call
  // create a function in api.service.ts
  // get all contact api

  getAllContact(){

    //url: http://localhost:3000/contacts  request:get
    // this.http.get('http://localhost:3000/contacts')

   return this.http.get(`${this.BASE_URL}/contacts`)
  }

  //  view component
   viewContact(id:any){
    // api call url:http://localhost:3000/contacts/id     request:get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)

   }

  //  api call for getting a perticular group

  getGroup(id:any){
    
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
    

  }
  //  api call for getting groups to dropdown
  getGroups(){
    
    return this.http.get(`${this.BASE_URL}/groups`)
  }
    
    // to add contact api-post
    addContacts(contact:Contactschema){
      // constructs a post request that interprets the body as Json and return the response body as an object passed from
      return this.http.post(`${this.BASE_URL}/contacts`,contact)

    }
     

      deleteContact(id:any){
        return  this.http.delete(`${this.BASE_URL}/contacts/${id}`)
      }

      // editcontact
      editcontact(id:any,body:Contactschema){
       return this.http.put(`${this.BASE_URL}/contacts/${id}`,body)
      }

     
    
    

}



  







