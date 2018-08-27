// CORE module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// redux module
import { StoreModule } from "@ngrx/store";

// custom module
import { JediModule } from "./jedi/jedi.module";

// components
import { AppComponent } from './app.component';

// other
import { counterReducer } from "./counter/counter.reducer";
import { jediListReducer } from "./jedi/jedi-list/jedi-list.reducer";
import {CounterModule} from "./counter/counter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  StoreModule.forRoot({
		  jediList: jediListReducer
	  }),
	  JediModule,
	  CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
