import { HotelsService } from './../services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {
  hotel: any;
  hotelId:any;
  constructor(private service: HotelsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.hotelId=this.route.snapshot.params.id;
    this.service.getOne(this.hotelId)
      .subscribe(hotel => this.hotel = hotel);
  }
  getStars (rating) {
    var val = parseFloat(rating);
    var size = val/5*100;
    return size + '%';
  }

}

