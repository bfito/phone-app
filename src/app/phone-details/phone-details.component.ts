import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})

export class PhoneDetailsComponent implements OnInit {

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhoneService
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getPhoneDetails(params['id']);
    });
  }

  getPhoneDetails(id) {
    // THIS WAS THE CODE BEFORE USING myRoute in ngOnInit
    this.myPhoneService.get(id)
    .then((apiResult) => {
      console.log(apiResult);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
  }

}
