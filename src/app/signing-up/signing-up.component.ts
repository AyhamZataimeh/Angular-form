import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { myService } from '../myservice.service';

@Component({
  selector: 'app-signing-up',
  templateUrl: './signing-up.component.html',
  styleUrls: ['./signing-up.component.css']
})
export class SigningUpComponent implements OnInit {
  
  userInfo={
    name:'',
    email:'',
    gender:'',
    date:Date()
  };

  constructor(private route:ActivatedRoute,
    private service:myService) { }

  ngOnInit(): void {

  
    this.route.queryParams.subscribe((param:Params)=>{
      
      this.userInfo.name=param['name'];
      this.userInfo.email=param['email'];

  

    });
    this.route.fragment.subscribe((param:string)=>{
     this.userInfo.gender=param;
    });
    
    
    
   
    
    

    
  }
  


}
