// DMG page 94
export class Scheme {
	constructor(objective: string, schemeStrings: string[]) {
		this.objective = objective;
		this.schemeStrings = schemeStrings;
		this.specificScheme = '';
	}

	objective: string;
	schemeStrings: string[];
	specificScheme: string;

	
	setRandomSpecificScheme() : void {
		this.specificScheme = this.schemeStrings[Math.floor(Math.random() * this.schemeStrings.length)];
	}
}