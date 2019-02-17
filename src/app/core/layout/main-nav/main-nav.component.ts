import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SettingsComponent } from '../../settings/settings.component';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}

  theme: 'angular-material-theme';

  openThemeDialLog(): void {
    console.log("inside openThemeDialLog" + this.theme);
    let dialogRef = this.dialog.open(SettingsComponent, {
      width: '250px',
      data: { theme: this.theme }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.theme = result;
    });
  }
}
