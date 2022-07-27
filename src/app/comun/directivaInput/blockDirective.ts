import { Directive, HostListener } from "@angular/core";


@Directive({selector: '[appBlockCopyPaste]'})
export class BlockCopyPaste{
    
    constructor() { }

    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
      e.preventDefault();
    }
  
    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
      e.preventDefault();
    }
  
    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
      e.preventDefault();
    }

    @HostListener('Space', ['$event']) blockSpace(e: KeyboardEvent) {
      e.preventDefault();
    }
}