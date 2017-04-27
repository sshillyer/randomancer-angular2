import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { VillainsComponent } from './villains.component';
import { VillainService } from './villain.service';
// import { SchemeService } from './scheme.service';
// import { VillainWeaknessService } from './villain-weakness.service';



@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'villains',
        component: VillainsComponent
      }
    ])
  ],
  declarations: [ 
  	AppComponent,
  	VillainsComponent,

  ],
  providers: [
  	VillainService,
  ],
  bootstrap:    [ 
    AppComponent 
  ],

})
export class AppModule { }



