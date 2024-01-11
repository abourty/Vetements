import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { SearchVetementComponent } from './search-vetement/search-vetement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { VetementGuard } from './guard/vetement.guard';
import { ConnectComponent } from './connect/connect.component';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

const routes: Routes = [
  {path: "vetements", component : VetementComponent},
{path: "add-vetement", component : AddVetementComponent , canActivate:[VetementGuard]},
{path: "updateVetement/:id", component: UpdateVetementComponent},
{path: "searchVetement", component: SearchVetementComponent},
{path: "dashboard", component: DashboardComponent},
{path: "connect",component:ConnectComponent},
{path:"connectHttp", component:ConnectHttpComponent},
{path: 'forbidden', component: ForbiddenComponent},
{path: "", redirectTo:"connect",  pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
