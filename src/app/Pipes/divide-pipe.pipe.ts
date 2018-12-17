import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dividePipe"
})
export class DividePipePipe implements PipeTransform {
  transform(value: string): string[] {
    //let data=[]
    console.log(value.split(","));
    return value.split(",");
    //return value / Divideby;
  }
}
