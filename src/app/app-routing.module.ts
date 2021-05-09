import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/setlists', pathMatch: 'full' },
  {
    path: 'setlists',
    loadChildren: () => import('./setlists/setlists.module').then(m => m.SetlistsModule)
  },
  {
    path: 'song',
    loadChildren: () => import('./song/song.module').then(m => m.SongModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
