import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  nama: any
  kd_member: any
  member: any = []
  menus: any = []

  constructor(
    public http: HttpClient
  ) {
    this.nama = "Joko Santoso"
    this.kd_member = "MB07949"


    this.getProfile()
    this.getMenu()

  }

  getProfile() {
    this.member.nama = "Agus Saputro"
    this.member.kd_member = "MB123456"
  }

  getMenu() {
    this.http.get("http://localhost:8000/api/menu_favorite").toPromise()
      .then(res => {
        this.menus = res
      })
  }

}
