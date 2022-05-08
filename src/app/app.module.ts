import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BasicGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
