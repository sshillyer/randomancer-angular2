import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { VillainsComponent } from './villains.component';
import { VillainDetailComponent } from './villain-detail.component';
import { VillainService } from './villain.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
 //    RouterModule.forRoot([
	// 	{
	// 		path: '',
	// 		redirectTo: '/dashboard',
	// 		pathMatch: 'full'
	// 	},
	// 	{
	// 		path: 'villains',
	// 		component: VillainsComponent
	// 	},
	// 	{
	// 		path: 'dashboard',
	// 		component: DashboardComponent
	// 	},
	// 	{
	// 		path: 'detail/:id',
	// 		component: VillainDetailComponent
	// 	}
	// ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VillainDetailComponent,
    VillainsComponent,
  ],
  providers: [
  	VillainService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



