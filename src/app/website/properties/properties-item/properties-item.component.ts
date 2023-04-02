import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../properties.service';
import { PropertyType } from 'src/app/interfaces/property.interface';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.css'],
})
export class PropertiesItemComponent {
  id: number;
  property: PropertyType;

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.property = this.propertiesService.getPropertyById(this.id);
  }
}
