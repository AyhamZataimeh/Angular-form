import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { myService } from '../myservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myForm:FormGroup;
  genders=['male','female'];
  usersID=['ayham','sahel'];
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:myService)
     { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'ID':new FormControl(null,[Validators.required,this.validID.bind(this)]),
        'password':new FormControl(null,[Validators.required]),
        'con-password':new FormControl(null,[Validators.required])

      }),
      'gender':new FormControl('male',[Validators.required])
    });
    console.log(this.myForm.get('userData.ID'));
    this.myForm.statusChanges.subscribe(status=>{
      console.log(status);
      
    })
    

    
  }

  validID(control:FormControl):{[s:string]:boolean}{

    if(this.service.usersID.indexOf(control.value)!==-1){
      return{'exsit':true};
     
      
    }

   

  }
  submit(){
    this.router.navigate(['/signing-up'],{
      queryParams:{name:this.myForm.get('userData.username').value,
      email:this.myForm.get('userData.email').value},
      fragment:this.myForm.get('gender').value,
    });
    this.service.users.push({
      ID:this.myForm.get('userData.ID').value,
      name:this.myForm.get('userData.username').value,
      email:this.myForm.get('userData.email').value,
      gender:this.myForm.get('gender').value,
      date:Date()
    });
    this.service.usersID.push(this.myForm.get('userData.ID').value);
    
    

       
       
  
   

    



  }
  
  
    
  }



