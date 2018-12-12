import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { ErrorComponent } from "./Components/error/error.component";

const routes: Routes = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "Login", component: LoginComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
