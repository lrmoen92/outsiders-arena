import { Pipe, PipeTransform } from '@angular/core';
import { CharacterStore } from './character.store';

@Pipe({name: 'portPipe'})
export class PortraitPipe implements PipeTransform {
    store :CharacterStore;
    allCharacters;


    constructor(store: CharacterStore) {
        this.store = store;
    }

    transform(value){
        for(let c of this.allCharacters) {
          console.log(c);
          if (c.id === value) {
            return c.avatarUrl;
          }
        }
        return "";
      }
}