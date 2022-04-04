import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../global.service';
import { LocalstorageService } from "../services/localstorage.service";

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
    public gb:GlobalService,
    private menuFavorite: LocalstorageService,
  ) {

  }

  ionViewDidEnter() {
    // Tangkap Nilai Parameter
    this.kategori = this.ActiveRoute.snapshot.paramMap.get("kategori")
    this.getMenu();
    console.log(this.kategori);
  }

  refresh(event){
    this.getMenu()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getMenu() {
    let param = this.kategori != null ? this.kategori : "";
    this.http.get(this.gb.API_URL+"menu/" + param).toPromise()
      .then(res => {
        this.menus = res
        this.initMenuFav();
      })
  }

  getDetailMenu(mn: any) {
    this.nav.navigateForward(["single-menu", { menu: JSON.stringify(mn) }])
  }

  setFav(mn:any) {
    this._setLocalFav(mn);
  }

  _setHostFav(mn:any) {
    mn.fav = mn.fav == 1 ? 0 : 1;
    this.http.get(this.gb.API_URL+"favorite/"+mn.id_menu+"/"+mn.fav).toPromise()
    .then(res=>{
      //  Ditambahkan notification
      console.log(res)
    })
  }

  _setLocalFav(mn:any) {
    this.menuFavorite.favorite(mn?.kd_menu);
    this.initMenuFav();
  }

  initMenuFav() {
    this.menus = this.menus.map(menu => {
      let index = this.menuFavorite.menuFav.indexOf(menu?.kd_menu)
      if (index >= 0) {
        menu['fav'] = 1;
      } else {
        menu['fav'] = 0;
      }
      return menu;
    })
    console.log(this.menus)
  }

}
