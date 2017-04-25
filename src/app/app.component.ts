import { Component, OnInit } from '@angular/core';
import { Villain } from './villain';
import { Scheme } from './scheme';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})

export class AppComponent implements OnInit { 
	title = 'Randomancer';
	villain = new Villain();

	ngOnInit(){
		this.villain.setRandomScheme();
	}
	
}
