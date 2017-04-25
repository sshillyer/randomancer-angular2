import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


import { Villain } from './villain';
import { VillainService } from './villain.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit { 
	villains: Villain[] = [];

	constructor(private villainService: VillainService) { }

	ngOnInit(): void {
		this.villainService.getVillains()
		.then(villains => this.villains = villains.slice(1,5));
	}
}
