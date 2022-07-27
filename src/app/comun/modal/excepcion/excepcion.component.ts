import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogModel } from '../../model/genericDialog.model';

@Component({
  selector: 'app-excepcion',
  templateUrl: './excepcion.component.html',
})
export class ExcepcionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcepcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericDialogModel) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  confirmDialog() {
    this.dialogRef.close(true);
  }
}
