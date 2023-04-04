import { Component } from '@angular/core';
import { PropertyType } from 'src/app/interfaces/property.interface';
import { PropertyService } from './properties.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getPropertiesList } from '../store/properties/properties.selectors';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  // counter$: Observable<number>;

  // constructor(private store: Store<{ counter: CounterState }>) {}

  // ngOnInit(): void {
  //   this.counter$ = this.store.select(getCounter);
  // }

  properties$: Observable<any>;

  constructor(private store: Store<{ properties: PropertyType[] }>) {}

  ngOnInit(): void {
    console.log("hello")
    try {
      this.store.select(getPropertiesList).subscribe((data) => {
        console.log(data);
      });
      // console.log(this.properties$);
    } catch (error) {
      console.log(error);
    }
    // this.store.select(getPropertiesList).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
