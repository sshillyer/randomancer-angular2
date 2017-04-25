import { Component, OnInit } from '@angular/core';

import { Villain } from './villain';
import { VillainService } from './villain.service';
import { Scheme } from './scheme';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [VillainService]
})

export class AppComponent implements OnInit { 

	constructor(private villainService: VillainService) {}

	title = 'Randomancer';
	randomVillain: Villain;

	ngOnInit(){
		this.getVillain();
	}

	getVillain(): void {
		this.villainService.getRandomVillain().then(villain => this.randomVillain = villain);
	}
	
}

/* Notes:
	To get the data from VillainService:
	1. first import the service
	2. add it to the providers array in @Component
	3. add it to the constructor to inject it into the AppComponent class

 */
