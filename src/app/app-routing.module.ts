import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SettingsComponent } from "./core/settings/settings.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "**",
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
