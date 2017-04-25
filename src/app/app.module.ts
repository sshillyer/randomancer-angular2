import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { VillainsComponent } from './villains.component';



@NgModule({
  imports:      [ 
    BrowserModule,

  ],
  declarations: [ 
  	AppComponent,
  	VillainsComponent,

  ],
  providers: [
  	// VillainService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



