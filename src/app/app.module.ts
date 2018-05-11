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
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatCardModule, MatGridListModule, MatMenuModule, MatChipsModule, MatProgressBarModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SettingsComponent,
    MainNavComponent,
    DashboardComponent  
  ],
  entryComponents: [MainNavComponent, SettingsComponent],
  imports: [
    BrowserModule,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
