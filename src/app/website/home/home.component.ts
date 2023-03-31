import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  properties= [{
    name:"Villa 1",
    src : "assets/images/villas/1.jpg",
  },
    {
      name:"Villa 2",
      src : "assets/images/villas/2.jpg",
    },
    {
      name:"Villa 3",
      src : "assets/images/villas/3.jpg",
    },
  ]
}
