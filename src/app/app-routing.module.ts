import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './core/settings/settings.component';


const routes: Routes = [
      {
        path: '.', component: HomeComponent
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path : 'dashboard',component:DashboardComponent
      }
      
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
