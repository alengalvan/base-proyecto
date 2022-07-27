import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollComponent } from './scroll/scroll.component';
 
@NgModule({
  exports: [ScrollComponent],
  declarations: [ScrollComponent],
  providers: [],
  imports:[CommonModule],
  schemas: [ ]

})
export class ScrollComponentModule { }
