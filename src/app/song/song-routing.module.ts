import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SongComponent } from './song.component';

const routes: Routes = [
  { path: ':id', component: SongComponent  },
  { path: '',   redirectTo: '/setlists', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
