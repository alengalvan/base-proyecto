import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogModel } from '../model/genericDialog.model';

@Component({
  selector: 'generic-dialog',
  templateUrl: './genericDialog.component.html'
})
export class GenericDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericDialogModel
  ) {}

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
