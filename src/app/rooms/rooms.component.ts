import { RoomsService } from './../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: any;
  hotelId:any;
  resource:any;
  constructor(private service: RoomsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.hotelId=this.route.snapshot.params.id;
    
    this.resource={
      'key':'hotel_id',
      'value':this.hotelId
    }
    
   this.service.getAllByKey(this.resource)
      .subscribe(rooms => this.rooms = rooms);
  }
}
