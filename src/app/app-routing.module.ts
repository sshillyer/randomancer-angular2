import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VillainsComponent }      from './villains.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'villains',     component: VillainsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
