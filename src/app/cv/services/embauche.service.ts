import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embauches: Personne[];
  constructor() {
    this.embauches=[];
   }

  getEmbauches(): Personne[] {
    return this.embauches;
  }
  addEmbauche(personne: Personne ) {
    if (!this.embauches.includes(personne) ){
      this.embauches.push(personne);
    }
    }
}
