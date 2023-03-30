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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './website/UI/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesItemComponent,
    ServicesComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
