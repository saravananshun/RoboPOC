import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrls: ['./confirmationdialog.component.css']
})
export class ConfirmationdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.dialogRef.updatePosition({ top: '50px', left: '300px' });
  }

}
