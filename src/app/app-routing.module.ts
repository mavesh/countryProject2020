import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountrydeatilComponent } from './countrydeatil/countrydeatil.component';
import { AllcountryComponent } from './allcountry/allcountry.component';


const routes: Routes = [
  {
    path: '',
    component: AllcountryComponent,
    pathMatch: 'full'
  }, {
    path: 'countryDetail/:countryName',
    component: CountrydeatilComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
