import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HotelsService extends DataService {

  constructor(http: Http) {
    super('http://localhost:3000/hotels', http);
  }
}
