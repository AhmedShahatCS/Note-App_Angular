import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(notes: any[], text:string): any[] {
    return notes.filter((note)=>note.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

}
