import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { JediListComponent } from './jedi-list/jedi-list.component';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule
  ],
  declarations: [JediListComponent],
	exports: [JediListComponent]
})
export class JediModule { }
