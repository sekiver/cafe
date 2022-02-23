import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  fav: any = 0;
  heart: any = "heart-outline"

  constructor() {

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
