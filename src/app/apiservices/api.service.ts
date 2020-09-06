import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  key = '?access_key=1168d3653f1add0cc75ce5bac3f53c0f';
 

  constructor(public http: HttpClient, public storage: Storage) { }
  
  ListOfPhoneNumber = [];
 
  ngOnInit() { }

  async validPhone(phoneNumbers) {
    let key = this.key
    
   await console.log('phone is ', phoneNumbers)

    // let headers = new HttpHeaders();
    // headers = headers.set('?access_key=', this.key)
 

    return (await this.http.get('http://apilayer.net/api/validate'+ this.key+
     '& number=+' + phoneNumbers ).toPromise())
  }

  async saveNumber(PhoneNumber) {
    this.storage.get('PhoneNumbers').then( (numbers)=>{
     if (numbers){
      this.ListOfPhoneNumber = numbers
     }
     this.ListOfPhoneNumber.push(PhoneNumber)
     this.storage.set('PhoneNumbers',this.ListOfPhoneNumber)
     this.ListOfPhoneNumber = []
    })
    
  }
}
