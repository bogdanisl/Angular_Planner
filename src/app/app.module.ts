import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './Components/AddEvent/AddEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { EventItemComponent } from './Components/EventItem/EventItem.component';
import { EventListComponent } from './Components/EventList/EventList.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    EventListComponent,
    NavbarComponent,
    AddEventComponent,
    EventInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
