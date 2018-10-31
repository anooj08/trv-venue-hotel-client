import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RoomsService extends DataService {

  constructor(http: Http) {
    super('http://localhost:3000/rooms', http);
  }
}
