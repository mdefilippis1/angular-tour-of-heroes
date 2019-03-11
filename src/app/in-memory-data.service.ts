import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, link: 'http://dai.supervision.miist.fr/', name: 'DAI' },
      { id: 2, link: 'http://supervision.miist.fr/', name: 'Supervision'},
      { id: 3, link: 'http://versions.supervision.miist.fr/ihm/', name: 'Versions' },
      { id: 4, link: 'http://check-tablespace.supervision.miist.fr/', name: 'Tablespace' },
      { id: 5, link: 'http://connexion-sagtu-sirius.supervision.miist.fr/', name: 'Connexion SAGTU-Sirius' },

    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
