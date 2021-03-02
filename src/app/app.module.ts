import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoteComponent } from "./note/note.component";
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { GlobalService } from './global.service';

const ROUTES: Routes = [
  { path: "note", component: NoteComponent },
  { path: "fav", component: FavouriteComponent },
];

@NgModule({
 imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, NoteComponent, FavouriteComponent],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService]
})
export class AppModule { }
