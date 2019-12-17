import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value,x){
     let fa=[];
    //  for(var i=0;i<value.length;i++){
    //       if(value[i]==x){
    //         fa.push(value[i]);
    //       }
    //  }
    //  return fa;
    for(var i=0;i<value.length;i++){
      if(value[i].includes(x)){
        fa.push(value[i]);
      }
    }
    return fa;
  }
  }


