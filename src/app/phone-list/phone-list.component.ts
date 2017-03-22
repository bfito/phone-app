import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Array<Object> = [];
  errorMessage: string = '';

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    // ajax request
    this.myPhoneService.getList()
      .then((phonesList) => {
        // console.log(apiResult);
        // assignment in order to render the view
        this.phones = phonesList;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.'
      });
  }

}
