import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  menus: any
  kategori: any
  search: any

  constructor(
    public http: HttpClient,
    public ActiveRoute: ActivatedRoute,
    public nav: NavController,
    public gb:GlobalService
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
    this.http.get(this.gb.API_URL+"menu/" + param).toPromise()
      .then(res => {
        this.menus = res
      })
  }

  getDetailMenu(mn: any) {
    this.nav.navigateForward(["single-menu", { menu: JSON.stringify(mn) }])
  }

  setFav(mn:any) {
    mn.fav = mn.fav == 1 ? 0 : 1;
    this.http.get(this.gb.API_URL+"favorite/"+mn.id_menu+"/"+mn.fav).toPromise()
    .then(res=>{
      //  Ditambahkan notification
      console.log(res)
    })
  }

}
