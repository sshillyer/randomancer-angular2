// DMG page 94
export class Scheme {
	objective: string;
	schemeStrings: string[];
	specificScheme: string;

	constructor(objective: string, schemeStrings: string[]) {
		this.objective = objective;
		this.schemeStrings = schemeStrings;
		this.specificScheme = '';
	}

	setRandomSpecificScheme(): void {
		this.specificScheme = this.schemeStrings[Math.floor(Math.random() * this.schemeStrings.length)];
	}
}
