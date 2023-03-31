import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() items: any[] = [];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentIndex = Math.floor(this.items.length / 2);
  }

  move(direction: number): void {
    if (direction > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
}
