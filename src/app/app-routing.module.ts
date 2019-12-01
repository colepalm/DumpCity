import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetlistsComponent } from './setlists/setlists.component';


const routes: Routes = [
  { path: 'setlists', component: SetlistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
