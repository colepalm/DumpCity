import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SetlistsComponent } from './setlists.component';

const routes: Routes = [
  { path: '', component: SetlistsComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetlistsRoutingModule { }
