import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypip',
  
})
export class MypipPipe implements PipeTransform {

  transform(value: any,user:string,ID:string) {
    const users=[];
    if(value.length===0 || user===''){
      
      return value;

    }
    for(const v of value){
      // for(let i=0;i<v[prop].length;i++){
      //   if(v[prop][i]===username[i]){
      //     users.push(v);


      //   }
      
        
      // }
      if(v[ID]===user){
        users.push(v);
        
      }

    }
    return users;
  }

}
