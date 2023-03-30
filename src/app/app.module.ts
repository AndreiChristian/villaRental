import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { PropertiesComponent } from './website/properties/properties.component';
import { PropertiesListComponent } from './website/properties/properties-list/properties-list.component';
import { PropertiesItemComponent } from './website/properties/properties-item/properties-item.component';
import { ServicesComponent } from './website/properties/services/services.component';
import { LoginComponent } from './website/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesItemComponent,
    ServicesComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
