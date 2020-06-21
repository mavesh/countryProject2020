import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CountrydataService } from './countrydata.service';

describe('CountrydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [BrowserModule, HttpClientModule],
    providers: [CountrydataService, HttpClient]
  }));

  it('should be created', () => {
    const service: CountrydataService = TestBed.get(CountrydataService);
    expect(service).toBeTruthy();
  });
  it('it should have getCountryData function', () => {
    const service: CountrydataService = TestBed.get(CountrydataService);
    expect(service.getCountryData).toBeTruthy();
  });

  it('should retrieve GET API data from calling getCountryData function', () => {
    const service: CountrydataService = TestBed.get(CountrydataService);
    const dummyDataGetFromAPI = [{
      name: 'India',
      callingCode: ['93'],
      capital: 'Delhi'
    }];
    service.getCountryData().subscribe(countryData => {
      expect(countryData.length).not.toBe(dummyDataGetFromAPI.length);
      expect(countryData).toEqual(dummyDataGetFromAPI);
    });
  });
  
  

});
