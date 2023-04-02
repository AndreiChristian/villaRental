import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyType } from 'src/app/interfaces/property.interface';
import { PropertyService } from '../properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css'],
})
export class PropertiesListComponent {
  properties: PropertyType[];

  constructor(
    private router: Router,
    private propertiesService: PropertyService
  ) {}

  ngOnInit(): void {
    this.properties = this.propertiesService.properties;
  }
  navigateToProperty(id: number) {
    this.router.navigate(['/properties', id]);
  }
}
