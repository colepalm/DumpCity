import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

import { SetlistsComponent } from './setlists.component';
import { SetlistsRoutingModule } from './setlists-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SetlistsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule,
    SetlistsRoutingModule
  ]
})
export class SetlistsModule { }
