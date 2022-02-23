import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  profile: any = []

  constructor() {
    this.profile.nama = "Agus Saputro"
    this.profile.alamat = "Jalan Thamrin 35 A"
    this.profile.kota = "Kota Madiun"
    this.profile.telp = "0867465873"
    this.profile.jk = 2
    this.profile.email = "agus@gmail.com"
  }

  becomeMember() {
    console.log(this.profile)
  }

}
