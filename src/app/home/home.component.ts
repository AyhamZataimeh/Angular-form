import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm:FormGroup;


  constructor(private router:Router) { }

  ngOnInit(): void {

    this.myForm=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required,],this.adminEmail),
      password:new FormControl(null,[Validators.required])
    });
    console.log(this.myForm);

    
    
    
  }
  adminEmail(email):Promise<any>{
    const promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(email.value!=='admin@admin.com'){
          resolve({'invalid':true});
        }else{
          resolve(null);
        }
      },1500);
      
     
    });
    return promise
  }
  submit(){
    this.router.navigate(['/loading']);
    
   

  

  }

}
