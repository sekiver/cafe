import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  menus: any;
  fav: any = 0;
  heart: any = "heart-outline"

  constructor(
    public http: HttpClient
  ) {
    this.getMenu();
  }

  getMenu() {
    this.http.get("http://localhost:8000/api/menu").toPromise()
      .then(res => {
        this.menus = res
      })
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
