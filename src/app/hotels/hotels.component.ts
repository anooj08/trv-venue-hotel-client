import { HotelsService } from './../services/hotels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[];

  constructor(private service: HotelsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(hotels => this.hotels = hotels);
  }
  getStars (rating) {
    var val = parseFloat(rating);
    var size = val/5*100;
    return size + '%';
  }
}
