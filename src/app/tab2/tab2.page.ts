import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  menus: any
  kategori: any
  fav: any = 0
  heart: any = "heart-outline"

  constructor(
    public http: HttpClient,
    public ActiveRoute: ActivatedRoute,
    public nav: NavController
  ) {

  }

  ionViewDidEnter() {
    // Tangkap Nilai Parameter
    this.kategori = this.ActiveRoute.snapshot.paramMap.get("kategori")
    this.getMenu();
    console.log(this.kategori);
  }

  getMenu() {
    let param = this.kategori != null ? this.kategori : "";
    this.http.get("http://localhost:8000/api/menu/" + param).toPromise()
      .then(res => {
        this.menus = res
      })
  }

  getDetailMenu(mn: any) {
    this.nav.navigateForward(["single-menu", { menu: JSON.stringify(mn) }])
  }

  setFav() {
    if (this.fav == 0) {
      this.heart = "heart"
      this.fav = 1
    } else {
      this.heart = "heart-outline"
      this.fav = 0
    }
  }

}
