import { Component, OnInit } from '@angular/core';
import { HotelsService } from './../services/hotels.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  hotelForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service: HotelsService) { }

  ngOnInit() {
    this.hotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      distance_to_venue: ['', Validators.required],
      rating: ['', Validators.required],
      price_category:['', Validators.required]
});
  }

  get f() { return this.hotelForm.controls; }

  onSubmit() {
    this.submitted = true;
    let data;
    if (this.hotelForm.invalid) {
        return;
    }
   data = this.hotelForm.value;
   this.service.create(data)
    .subscribe();
}

}
