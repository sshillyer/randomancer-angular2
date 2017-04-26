import { Injectable } from '@angular/core';
import { VillainMethod } from './villain-method';
import { VILLAIN_METHODS } from './data-villain-methods';

@Injectable()
export class VillainMethodService {
	getRandomVillainMethod(): Promise<VillainMethod> {
		let randomVillainMethod = VILLAIN_METHODS[Math.floor(Math.random() * VILLAIN_METHODS.length)];
        randomVillainMethod.setRandomSpecificMethod();
		return Promise.resolve(randomVillainMethod);
	}
}