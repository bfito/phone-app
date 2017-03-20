import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})

export class PhoneDetailsComponent implements OnInit {

  phone: Object;

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhoneService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getPhoneDetails(params['id']);
    });
  }

  getPhoneDetails(id) {
    // THIS WAS THE CODE BEFORE USING myRoute in ngOnInit
    this.myPhoneService.get(id)
    .then((thePhoneDetails) => {
      this.phone = thePhoneDetails;
      // console.log(thePhoneDetails);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
  }

  deletePhone() {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    // console.log('Need to delete: ', this.phone['_id']);
    this.myPhoneService.remove(this.phone['_id'])
      .then((apiResult) => {
        this.myNavigator.navigate(['']);
        console.log(apiResult);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

}
