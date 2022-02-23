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

  constructor() {
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
    this.menus = [
      { kd_menu: "MN0001", nm_menu: "Nasi Goreng Jawa", harga: 15000, jenis: "Makanan", foto: "assets/images/menu-nasgor.jpeg" },
      { kd_menu: "MN0002", nm_menu: "Jus Alpukat", harga: 8000, jenis: "Minuman", foto: "assets/images/menu-jus-alpukat.jpg" },
      { kd_menu: "MN0003", nm_menu: "Kentang Goreng", harga: 15000, jenis: "Snack", foto: "assets/images/menu-kentang.jpg" },
    ]
  }

}
