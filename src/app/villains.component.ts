import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Villain } from './villain';
import { VillainService } from './villain.service';
import { Scheme } from './scheme';
import { SchemeService } from './scheme.service';
import { VillainMethod } from './villain-method';
import { VillainMethodService } from './villain-method.service';
import { VillainWeaknessService } from './villain-weakness.service';


@Component({
	selector: 'villains',
	templateUrl: './villains.component.html',
	providers: [VillainService, SchemeService, VillainMethodService, VillainWeaknessService ]
})

export class VillainsComponent implements OnInit {
	constructor(
		private villainService: VillainService,
		private schemeService: SchemeService,
		private villainMethodService: VillainMethodService,
		private villainWeaknessService: VillainWeaknessService
	) {}

	randomVillain: Villain;

	ngOnInit(): void {
		this.getRandomVillain();
	}

	getRandomVillain() : void {
		this.villainService.getRandomVillain()
			.then(villain => this.randomVillain = villain);
		this.schemeService.getRandomScheme()
			.then(scheme => this.randomVillain.scheme = scheme);
		this.villainMethodService.getRandomVillainMethod()
			.then(method => this.randomVillain.method = method);
		this.villainWeaknessService.getRandomWeakness()
			.then(weakness => this.randomVillain.weakness = weakness);
	}
}


/* Notes:
	To get the data from VillainService:
	1. first import the service
	2. add it to the providers array in @Component
	3. add it to the constructor to inject it into the AppComponent class

 */