import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Villain } from './villain';

@Component({
	selector: 'villains',
	templateUrl: './villains.component.html',
	//styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit { 
	randomVillain: Villain;

	// constructor(
	// 	private router: Router) { }


	ngOnInit(): void {
		this.randomVillain = new Villain();
		this.randomVillain.setRandomScheme();
	}
}

