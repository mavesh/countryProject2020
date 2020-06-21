import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../countrydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-countrydeatil',
  templateUrl: './countrydeatil.component.html',
  styleUrls: ['./countrydeatil.component.css']
})
export class CountrydeatilComponent implements OnInit {

  selectedCountryName;
  selectedCountry;
  neighbourCountriesList = [];
  constructor(
    private countryDataService: CountrydataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      if (params && params.countryName) {
        this.selectedCountryName = params.countryName;
      }
    });
    this.countryDataService.getCountryData().subscribe(allCountryData => {
      console.log('allCountryData', allCountryData);
      this.getSelectedCountryDetail(allCountryData);
    });
  }

  getSelectedCountryDetail(allCountryData) {
   const findSelectedCountryObj = _.find(allCountryData, (country) => {
     return country.name === this.selectedCountryName;
   });
   console.log('findSelectedCountryObj', findSelectedCountryObj);
   if (findSelectedCountryObj) {
   this.selectedCountry = findSelectedCountryObj;
   this.getSelectCountryNeighbourFlags(findSelectedCountryObj.borders, allCountryData);
   }
  }

  getSelectCountryNeighbourFlags(neighbourCountryCodeList, allCountryData) {
    _.forEach(neighbourCountryCodeList, (countryCode) => {
      _.find(allCountryData, (countryObj) => {
        if (countryObj.alpha3Code === countryCode) {
            this.neighbourCountriesList.push(countryObj);
        }
      });
    });
    console.log('neighbourCountries', this.neighbourCountriesList);
  }

  redirectToAllCountryPage() {
    this.location.back();
  }

}
