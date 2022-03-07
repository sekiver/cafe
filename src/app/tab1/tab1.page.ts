import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  user: any = []
  menus: any = []

  constructor(
    public http: HttpClient,
    public nav: NavController
  ) {
    this.getProfile()
    this.getMenu()

    if(!this.user){ this.nav.navigateRoot("/") }
  }

  ionViewDidEnter(){
    this.getProfile()
    this.getMenu()
  }

  getProfile() {
    this.user = JSON.parse(localStorage.getItem("login"))
  }

  getMenu() {
    this.http.get("http://localhost:8000/api/menu_favorite").toPromise()
      .then(res => {
        this.menus = res
      })
  }

  goMenu(kat: any) {
    // Pergi ke Halaman tabs/tab2
    //this.route.navigateByUrl("tabs/tab2")
    this.nav.navigateForward(["tabs/tab2", { kategori: kat }])
  }

  getDetailMenu(mn: any) {
    this.nav.navigateForward(["single-menu", { menu: JSON.stringify(mn) }])
  }

  goProfile(){
    this.nav.navigateForward("tabs/tab3")
  }

}
