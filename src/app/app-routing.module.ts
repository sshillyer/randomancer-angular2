import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VillainsComponent }      from './villains/villains.component';
import { NpcComponent }      from './npc/npc.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'villains',     component: VillainsComponent },
  { path: 'npc', component: NpcComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
