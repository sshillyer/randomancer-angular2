import { Injectable } from '@angular/core';
import { Villain } from './villain';

@Injectable()
export class VillainService {
	getRandomVillain(): Promise<Villain> {
		let randomVillain = new Villain();
		return Promise.resolve(randomVillain);
	}
}
