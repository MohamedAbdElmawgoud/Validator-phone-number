import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ApiService } from "src/app/apiservices/api.service";
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  min = 11;
  PhoneNumbers
  PhoneValidator = new FormGroup({

    "number": new FormControl('', [Validators.required, Validators.min(this.min)])

  });
  constructor(public valid: ApiService, private router: Router, public storage: Storage) { }


  async ngOnInit() {
    await this.storage.get('PhoneNumbers').then((numbers) => {
      this.PhoneNumbers = numbers
    })
  }

  async submit() {
    console.log(this.PhoneValidator.status)
    if (this.PhoneValidator.status == "VALID") {

      let parmater = { ...this.PhoneValidator.value.phone };

      Swal.fire({

        showCancelButton: true,
        title: 'Are you sure?',

        icon: 'warning',

        confirmButtonText: 'Yes, Valid it!',
        cancelButtonText: 'No, its wrong'

      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Yes!',
            'check your number .',
            'success'
          )
          this.valid.saveNumber(this.PhoneValidator.value.number);

          let checkOfValidatorData = this.valid.validPhone(this.PhoneValidator.value.number)
          checkOfValidatorData.then((res: Response) => {
            console.log(res);

          })
          this.ToViewValidator(this.PhoneValidator.value.number)

          console.log('success')

        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'your number is correct is wrong ?)',
            'error'
          )
          console.log('Cancelled')
        }
      })


    }
    else {
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 2500,
        title: "please enter valid number",
        showCancelButton: true,
      })



    }
  }
  ToViewValidator(number) {
    this.router.navigate(['view-validator', { data: number }]);
  }
}
