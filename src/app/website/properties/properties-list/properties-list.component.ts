import { Component, Input } from '@angular/core';
import { PropertyType } from 'src/app/interfaces/property.interface';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent {
  @Input() properties:PropertyType[]
}
