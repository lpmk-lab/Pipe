import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:"percentage"
})
export class PercentPipe implements PipeTransform{
transform(value: number,total :number,digit:number=0, ...args: any[]) {
return ((value/total)*100).toFixed(digit) +"%"
}
}
