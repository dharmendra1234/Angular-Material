import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SettingsComponent } from '../../settings/settings.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent  implements OnInit, OnDestroy{

  ngOnDestroy(): void {
 //   throw new Error("Method not implemented.");

 this.authSubscription.unsubscribe();
  }
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private authService: AuthService) {}

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

  ngOnInit(){
  this.authSubscription=  this.authService.authChange.subscribe(authStatus => {
      this.isAuth=authStatus
    });
  }
}
