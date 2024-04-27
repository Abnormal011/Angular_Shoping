import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value:any, args: any): any {
    if(value && args){
      return value.filter((e:any) => {
        return e.title.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        e.brand.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        e.category.toLowerCase().indexOf(args.toLowerCase()) > -1;
      });
    }
    else{
      return value
    }
  }

}
