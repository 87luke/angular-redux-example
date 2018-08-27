import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { JediListComponent } from "./jedi-list.component";

import { counterReducer } from "./counter.reducer";
import { jediListReducer } from "./jedi-list.reducer";

@NgModule({
  declarations: [
    AppComponent,
	  JediListComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  StoreModule.forRoot({
		  counter: counterReducer,
		  jediList: jediListReducer
	  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
