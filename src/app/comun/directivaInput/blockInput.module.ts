import { NgModule } from '@angular/core'; 
import { BlockCopyPaste } from './blockDirective';
import { InputDirective } from './blockInputDirective';
import { TrimValueDirective } from './trimInput.module';
import { InputMaskDirective } from './inputDirective';

@NgModule({
  declarations: [
    BlockCopyPaste,
    InputMaskDirective,
    InputDirective,
    TrimValueDirective
  ],
  exports:[
    BlockCopyPaste,
    InputMaskDirective,
    InputDirective,
    TrimValueDirective
  ],
  imports: [ 
  ]
})
export class BlockInputModule { }
