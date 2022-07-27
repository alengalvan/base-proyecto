import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericAsignacionDialogModel } from '../../model/genericDialog.model';


@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html'
})
export class ReasignacionComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ReasignacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericAsignacionDialogModel) {}

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

