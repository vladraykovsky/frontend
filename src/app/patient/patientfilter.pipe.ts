import {Pipe, PipeTransform} from '@angular/core';
import {Patient} from './patient';

@Pipe({
  name: 'filter'
})
export class PatientfilterPipe implements PipeTransform {
  transform(items: Patient[] , searchText: string): Patient[] {
    return items.filter( it  => {
      if (it.name.indexOf(searchText) >= 0 || it.surname.indexOf(searchText) >= 0) {
        return it;
      }
      if (searchText.indexOf(' ') >= 0) {
        if (searchText.indexOf(it.name) >= 0 || searchText.indexOf(it.surname) >= 0) {
          return it;
        }
      } else {
        return null; }
    } );
  }


}
