import { Injectable } from '@angular/core';
import { VillainWeakness } from './villain-weakness';
import { VILLAIN_WEAKNESSES } from './data-villain-weakness';

@Injectable()
export class VillainWeaknessService {
	getRandomWeakness(): Promise<VillainWeakness> {
		let randomVillainWeakness = VILLAIN_WEAKNESSES[Math.floor(Math.random() * VILLAIN_WEAKNESSES.length)];
		return Promise.resolve(randomVillainWeakness);
	}
}
