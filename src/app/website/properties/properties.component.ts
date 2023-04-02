import { Component } from '@angular/core';
import { PropertyType } from 'src/app/interfaces/property.interface';
import { PropertyService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  properties: PropertyType[];

  showDescription = false;

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.properties;
  }
}
