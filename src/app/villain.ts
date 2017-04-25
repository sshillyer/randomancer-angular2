import { Scheme } from './scheme';
import { SCHEMES } from './data-schemes';

export class Villain {
	scheme: Scheme;

	randomize(): void {
		this.setRandomScheme();
	}

	setRandomScheme(): void {
		this.scheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)];
		this.scheme.specificScheme = this.scheme.schemeStrings[Math.floor(Math.random() * this.scheme.schemeStrings.length)];
	}

	// setRandomSpecificScheme(): void {
	// 	this.scheme.setRandomSpecificScheme();
	// }
}