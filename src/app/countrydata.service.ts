import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  private countrystoredata = new BehaviorSubject<any>(null);

  constructor( private http: HttpClient ) { }

  getCountryData() {
    return this.http.get<any>('https://restcountries.eu/rest/v2/all');
  }

  getCountrylistData() {
    return this.countrystoredata.asObservable;
  }

  setCountrylistData(data) {
    this.countrystoredata.next(data);
  }
}

