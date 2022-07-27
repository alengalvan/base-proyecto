import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericIncidenteDialogModel } from '../../model/genericDialog.model';

@Component({
  selector: 'generic-dialog-incidente',
  templateUrl: './genericDialogIncidente.component.html'
})
export class GenericDialogIncidenteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogIncidenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericIncidenteDialogModel) {}

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