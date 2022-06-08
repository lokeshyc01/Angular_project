import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { MarvellousdComponent } from './marvellousd/marvellousd.component';
import { NGForComponent } from './ng-for/ng-for.component';
import { NGIFComponent } from './ng-if/ng-if.component';
import { NGSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    MarvellousComponent,
    MarvellousdComponent,
    NGForComponent,
    NGIFComponent,
    NGSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
