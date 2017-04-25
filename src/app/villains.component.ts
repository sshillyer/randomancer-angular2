import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Villain } from './villain';
import { VillainService } from './villain.service';

@Component({
	selector: 'my-villains',
	templateUrl: './villains.component.html',
	styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit { 
	villains: Villain[];
	selectedVillain: Villain;

	constructor(
		private router: Router;
		private villainService: VillainService) { }

	onSelect(villain: Villain): void {
		this.selectedVillain = villain;
	}
	getVillains(): void {
		this.villainService.getVillains().then(villains => this.villains = villains);
	}
	ngOnInit(): void {
		this.getVillains();
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedVillain.id]);
	}
}

