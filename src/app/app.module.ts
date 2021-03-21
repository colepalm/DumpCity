import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetlistsComponent } from './setlists/setlists.component';
import { SharedModule } from './shared/shared.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    SetlistsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    SharedModule,
    NavModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const prefix = isDevMode() ?
          'http://localhost:4000' :
          'https://dump-city-api.herokuapp.com';
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `${prefix}/graphql`,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppModule { }
