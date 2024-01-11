import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementComponent } from './vetements/vetements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { SearchVetementComponent } from './search-vetement/search-vetement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { HttpClientModule } from '@angular/common/http'; 
import { MenuComponent } from './menu/menu.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

@NgModule({
  declarations: [
    AppComponent,
    VetementComponent,
    AddVetementComponent,
    UpdateVetementComponent,
    SearchVetementComponent,
    DashboardComponent,
    ConnectComponent,
    MenuComponent,
    ForbiddenComponent,
    ConnectHttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
