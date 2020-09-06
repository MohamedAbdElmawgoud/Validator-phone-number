import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from "src/app/apiservices/api.service";

@Component({
  selector: 'app-view-validator',
  templateUrl: './view-validator.page.html',
  styleUrls: ['./view-validator.page.scss'],
})
export class ViewValidatorPage implements OnInit {
  number;
  phoneNumber;
  // AllValidationData;
  valid;
  carrier;
  country_name;
  international_format;
  local_format;
  line_type;
  location;
  country_prefix;
  constructor(private route: ActivatedRoute, public validator: ApiService, ) { }

  async ngOnInit() {
    this.number = await this.route.snapshot.params.data;
    this.validator.validPhone(this.number).then(res => {
      console.log(res)
      this.valid = res.valid;
      this.carrier = res.carrier;
      this.country_name = res.country_name;
      this.international_format = res.international_format;
      this.local_format = res.local_format;
      this.line_type = res.line_type;
      this.location = res.location;
      this.country_prefix = res.country_prefix;
    })
    console.log(this.number)


  }
}
