import { Injectable } from '@angular/core';
import { Villain } from './villain';
import { VILLAINS } from './mock-villains';

@Injectable()
export class VillainService {
	getVillains(): Promise<Villain[]> {
		return Promise.resolve(VILLAINS);
	}

	getVillain(id : number): Promise<Villain> {
		return this.getVillains()
			.then(villains => villains.find(villain => villain.id === id));
	}
}