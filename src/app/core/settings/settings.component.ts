import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  ngOnInit() {
  }

  theme: string;

  themes = [
    { value: 'first-theme', viewValue: 'First Theme' },
    { value: 'second-theme', viewValue: 'Second Theme' },
    { value: 'primary-theme', viewValue: 'Material Theme' },
    { value: 'unicorn-dark-theme', viewValue: 'Unicorn Theme' }
  ];


  constructor(
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('testtt' + data.theme);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
