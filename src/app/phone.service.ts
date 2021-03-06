import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {
  // This is for development, we would have a if statement to use real site or remove this and add the actual site.
  // Commented out to deploy, this was for development
  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = '';


  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
    .toPromise()
    // this parses the json
    .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
        .toPromise()
        .then(apiResponse => apiResponse.json())
  }

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}
