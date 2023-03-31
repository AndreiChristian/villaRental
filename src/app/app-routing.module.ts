import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './website/about/about.component';
import { LoginComponent } from './website/auth/login/login.component';
import { HomeComponent } from './website/home/home.component';
import { PropertiesItemComponent } from './website/properties/properties-item/properties-item.component';
import { PropertiesComponent } from './website/properties/properties.component';
import { ServicesComponent } from './website/properties/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'properties',
    component: PropertiesComponent,
    children: [{ path: ':id', component: PropertiesItemComponent }],
  },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
