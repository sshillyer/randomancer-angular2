import { Injectable } from '@angular/core';
import { Villain } from './villain';
import { Scheme } from './scheme';

@Injectable()
export class VillainService {
	getRandomVillain(): Promise<Villain> {
		let randomVillain = new Villain();
		randomVillain.randomize();
		return Promise.resolve(randomVillain);
	}
}