import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value,a,b,c,d){
  //   let fa=[];
  //   for(var i=0;i<value.length;i++){
  //     if((value[i].id==a)||value[i].title.includes(b)||value[i].author.includes(c)||(value[i].year==(d))){
  //       fa.push(value[i]);
  //       continue;
  //     }
      
  //   }
  // return fa;

  if(a!=''){
    return value.filter((book)=>book.id==a);
  }
  else if(b!=''){
    return value.filter((book)=>book.title.includes(b));
  }
  else if(c!=''){
    return value.filter((book)=>book.author.includes(c));
  }
  else if(d!=''){
    return value.filter((book)=>book.year==d);
  }
  else{
    return value;
  }

  }
}

