import { Injectable } from '@angular/core';
import { Profession } from './profession';
import { PROFESSIONS } from './data-profession';

@Injectable()
export class ProfessionService {
    getRandomProfession(): Promise<Profession> {
        let randomProfession = PROFESSIONS[Math.floor(Math.random() * PROFESSIONS.length)];
        return Promise.resolve(randomProfession);
    }
}
