import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '爱因斯坦' },
      { id: 2, name: '德蕾莎' },
      { id: 3, name: '马丁路德金' },
      { id: 4, name: '戴高乐' },
      { id: 5, name: '铁托' },
      { id: 6, name: '曼德拉' },
      { id: 7, name: '爱迪生' },
      { id: 8, name: '林肯' },
      { id: 9, name: '列宁' },
      { id: 10, name: '甘地' }
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
