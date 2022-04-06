import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  user: any = []
  menus: any

  constructor(
    public http: HttpClient,
    public nav: NavController,
    public gb:GlobalService
  ) {
    this.getProfile()
    this.getMenu()

    if(!this.user){ this.nav.navigateRoot("/") }
  }

  ionViewDidEnter(){
    this.getProfile()
    this.getMenu()    
  }

  refresh(event){
    this.getProfile()
    this.getMenu()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getProfile() {
    this.user = JSON.parse(localStorage.getItem("login"))
  }

  async getMenu() {
    await this.http.get(this.gb.API_URL+"menu_favorite").toPromise()
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



