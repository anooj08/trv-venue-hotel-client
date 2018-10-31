import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable, throwError } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(map(response => response.json()));
  }

  getAllByKey(resource) {
    return this.http.get(this.url + '?' + resource.key + '=' + resource.value)
      .pipe(map(response => response.json()));
  }


  getOne(resource) {
    return this.http.get(this.url + '/' + resource)
      .pipe(map(response => response.json()));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource),{headers: new Headers({ 'Content-Type': 'application/json' }) })
      .pipe(map(response => response.json()));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(map(response => response.json()));
  }
}
