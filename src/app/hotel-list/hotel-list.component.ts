import { HotelsService } from './../services/hotels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[];

  constructor(private service: HotelsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.service.getAll()
    .subscribe(hotels => this.hotels = hotels);
  }
  delete(event, item){
    this.service.delete(item.id)
    .subscribe(data => this.getData());
  }
  getStars (rating) {
    let val = parseFloat(rating);
    let size = val/5*100;
    return size + '%';
  }
}
