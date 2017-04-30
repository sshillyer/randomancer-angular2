import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainService } from './villains/villain.service';
import { NpcComponent } from './npc/npc.component';
// import { NpcService } from './npc/npc.service';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'villains',
        component: VillainsComponent
      },
      {
        path: 'npc',
        component: NpcComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    VillainsComponent,
    NpcComponent
  ],
  providers: [
    VillainService,
    // NpcService
  ],
  bootstrap:    [
    AppComponent
  ],

})
export class AppModule { }



