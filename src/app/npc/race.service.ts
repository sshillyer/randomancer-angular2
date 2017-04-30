import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './data-race';

@Injectable()
export class RaceService {
    getRandomRace(): Promise<Race> {
        let randomRace = RACES[Math.floor(Math.random() * RACES.length)];
        return Promise.resolve(randomRace);
    }
}
