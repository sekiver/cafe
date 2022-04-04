import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  menuFav: Array<any> = []

  constructor() {
    this.loadFavorite();
  }

  favorite(key) {
    let index = this.menuFav.indexOf(key);
    if (index >= 0) {
      this.removeFavorite(key);
    } else {
      this.addFavorite(key);
    }
  }

  addFavorite(key) {
    this.menuFav.push(key)
    this.saveFavorite();
  }

  removeFavorite(key) {
    let index = this.menuFav.indexOf(key);
    if (index >= 0) {
      this.menuFav.splice( index, 1 );
      this.saveFavorite();
    }
  }

  saveFavorite() {
    localStorage.setItem('menu-fav', JSON.stringify(this.menuFav))
  }

  loadFavorite() {
    let menuFav = localStorage.getItem('menu-fav')
    if(menuFav) {
      this.menuFav = JSON.parse(menuFav);
    }
  }
}
