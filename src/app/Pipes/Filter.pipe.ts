import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../model/student.model";


@Pipe({
  name:'filtergender',
  pure:false
}

)
export class FilterPipe implements PipeTransform{

  transform(value: Student[],filerText:string ,...args: any[]) {
    if(filerText.toLowerCase()=='all'||filerText.toLowerCase()==''||value.length==0){
      return value;
    }else{

     return value.filter((data:Student)=>{
      return data.gender.toLowerCase()==filerText.toLowerCase()
     })

    }

  }

}
