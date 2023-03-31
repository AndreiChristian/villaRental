import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() items: any[] = []
  activeIndex = 0;

  ngOnInit() {
    this.showCurrentItem();
  }

  showCurrentItem() {
    this.activeIndex = (this.activeIndex + this.items.length) % this.items.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    this.showCurrentItem();
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    this.showCurrentItem();
  }
}
