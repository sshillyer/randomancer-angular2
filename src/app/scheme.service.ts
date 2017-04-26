import { Injectable } from '@angular/core';
import { Scheme } from './scheme';
import { SCHEMES } from './data-schemes';

@Injectable()
export class SchemeService {
	getRandomScheme(): Promise<Scheme> {
		let randomScheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)];
		randomScheme.setRandomSpecificScheme();
		return Promise.resolve(randomScheme);
	}
}