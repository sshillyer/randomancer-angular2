import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Villain } from './villain';
import { VillainService } from './villain.service';
// import { Scheme } from './scheme';
import { SchemeService } from './scheme.service';
// import { VillainMethod } from './villain-method';
import { VillainMethodService } from './villain-method.service';
import { VillainWeaknessService } from './villain-weakness.service';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser'; // used to export to JSON


@Component({
	selector: 'villains',
	templateUrl: './villains.component.html',
	providers: [VillainService, SchemeService, VillainMethodService, VillainWeaknessService ]
})

export class VillainsComponent implements OnInit {
	randomVillain: Villain;
	downloadJsonHref: SafeUrl;
	rawTextBlock: String;

	constructor(
		private villainService: VillainService,
		private schemeService: SchemeService,
		private villainMethodService: VillainMethodService,
		private villainWeaknessService: VillainWeaknessService,
		private sanitizer: DomSanitizer // used to export to JSON
	) {}

	ngOnInit(): void {
		this.getRandomVillain();
	}

	getRandomVillain(): void {
		this.rawTextBlock = null;
		this.villainService.getRandomVillain()
			.then(villain => this.randomVillain = villain);
		this.schemeService.getRandomScheme()
			.then(scheme => this.randomVillain.scheme = scheme);
		this.villainMethodService.getRandomVillainMethod()
			.then(method => this.randomVillain.method = method);
		this.villainWeaknessService.getRandomWeakness()
			.then(weakness => this.randomVillain.weakness = weakness);
	}

	getJSONstring(): void {
		let villain = {
			'objective' : this.randomVillain.scheme.objective,
			'scheme' : this.randomVillain.scheme.specificScheme,
			'methodology' : this.randomVillain.method.methodType,
			'technique' : this.randomVillain.method.specificMethod,
			'weakness' : this.randomVillain.weakness.weakness
		};
		this.rawTextBlock = JSON.stringify(villain, null, 2); // third param pretty prints
	}

	getHomebreweryString(): void {
		this.rawTextBlock = `##### Random Villain Details
<div class='wide'>
| Objective | Scheme | Methodology | Technique | Weakness
|:----------|:-------|:------------|:----------|:--------
| ` + this.randomVillain.scheme.objective + `|` + this.randomVillain.scheme.specificScheme + `|` + this.randomVillain.method.methodType +
 `|` + this.randomVillain.method.specificMethod + `|` + this.randomVillain.weakness.weakness + `
</div>
`;
	}

	// generateDownloadJsonUri() {
	// 	// Cite: http://stackoverflow.com/questions/42360665/angular2-to-export-download-json-file
	// Doesn't seem to work
    //     var theJSON = JSON.stringify(this.getJSONstring());
    //     var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    //     this.downloadJsonHref = uri;
    // }
}


/* Notes:
	To get the data from VillainService:
	1. first import the service
	2. add it to the providers array in @Component
	3. add it to the constructor to inject it into the AppComponent class

 */
