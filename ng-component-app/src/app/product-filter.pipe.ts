import { Pipe, PipeTransform } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value,x){
    let fpa=[];
    for(var i=0;i<value.length;i++){
      if(value[i].name.includes(x)){
        fpa.push(value[i]);
      }
    }return fpa;
  }
  

}
