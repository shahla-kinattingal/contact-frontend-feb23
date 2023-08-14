import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit  {

   allcontact: any = []
  searchkey:string=""

   isLoading:boolean=true
  errorMsg: any;

  //  array.length=zero

  constructor(private api:ApiService){}

  ngOnInit(): void {
   this.getAllcontact()
  }

  getAllcontact(){
    this.api.getAllContact().subscribe({

      // console.log(result);
      // this.allcontact = result

      next:(response:any) =>{
        // 
        setTimeout(()=>{
          this.allcontact=response
          this.isLoading=false
        
        },2000)
        
      },
      error: (err:any) => {
        console.log(err.message);

       this.errorMsg=err.message
       this.isLoading=false
        
      }
      

    }
    )
  }

  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        this.getAllcontact()

      }
    })
  }
}
