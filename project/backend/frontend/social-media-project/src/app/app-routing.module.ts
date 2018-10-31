import{Routes, RouterModule} from '@angular/router';
import{NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'auth',
    loadChildren: './main/main.module#MainModule'
  }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]
})

export class AppRoutingModule { }
