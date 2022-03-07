import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  profile: any = []
  user:any = []

  constructor(
    public nav:NavController
  ) {
    this.profile.nama = "Agus Saputro"
    this.profile.alamat = "Jalan Thamrin 35 A"
    this.profile.kota = "Kota Madiun"
    this.profile.telp = "0867465873"
    this.profile.jk = 2
    this.profile.email = "agus@gmail.com"
  }

  ionViewDidEnter(){
    this.getProfile()
  }

  getProfile() {
    this.user = JSON.parse(localStorage.getItem("login"))
  }

  becomeMember() {
    console.log(this.profile)
  }

  logout(){
    localStorage.clear()
    this.nav.navigateRoot("/")
  }

}
