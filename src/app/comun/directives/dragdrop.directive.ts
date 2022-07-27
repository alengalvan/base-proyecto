import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {

  constructor() { }

  // tslint:disable-next-line: no-output-native
  @Output() fileDropped = new EventEmitter();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Drop listener
  @HostListener('drop', ['$event']) ondrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      this.fileDropped.emit(files);
    }
  }

}
