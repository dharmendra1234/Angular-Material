import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './core/settings/settings.component';
import { MainNavComponent } from './core/layout/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatCardModule, MatGridListModule, MatMenuModule, MatChipsModule, MatProgressBarModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatDialogModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SettingsComponent,
    MainNavComponent,
    DashboardComponent,
    SignInComponent  
  ],
  entryComponents: [MainNavComponent, SettingsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
