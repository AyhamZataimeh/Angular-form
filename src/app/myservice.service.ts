import { Injectable,EventEmitter } from "@angular/core";



@Injectable({
    providedIn:'root'
})
export class myService{
    value=new EventEmitter<any>();
    usersID=[];  
    users=[];
    

}