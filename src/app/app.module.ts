import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FavComponent } from "../favourite/favourite.component";
import { NoteComponent } from "../note/note.component";
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: "note", component: NoteComponent },
  { path: "fav", component: FavComponent },
];

@NgModule({
 imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, NoteComponent, FavComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
