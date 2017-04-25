import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Villain } from './villain.js';
import { VillainService } from './villain.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'villain-detail',
	templateUrl: './villain-detail.component.html'
})

export class VillainDetailComponent implements OnInit {
	constructor(
		private villainService: VillainService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	@Input() villain: Villain;

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.villainService.getVillain(+params['id']))
	    .subscribe(villain => this.villain = villain);
	}

	goBack(): void {
		this.location.back();
	}
}