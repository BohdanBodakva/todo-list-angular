import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListModule } from './task-list/task-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    CalendarModule,
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
