import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isbn'
})
export class ISBNPipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return value;
    }

    return `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5, 9)}-${value.substring(9, 12)}-${value.substring(12, 13)}`;
  }

}
