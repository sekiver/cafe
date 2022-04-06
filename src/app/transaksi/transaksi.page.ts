import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage implements OnInit {

  transaksi:any
  user:any = {}

  constructor(
    public http: HttpClient,
    public nav: NavController,
    public gb:GlobalService,
  ) {
    this.getTransaksi()
    this.getProfile()
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getTransaksi()
    this.getProfile()
  }

  getProfile() {
    this.user = JSON.parse(localStorage.getItem("member"))
  }

  refresh(event){
    this.getTransaksi()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getTransaksi() {
    this.http.get(this.gb.API_URL+"transaksi/" + this.user.id_member).toPromise()
      .then(res => {
        this.transaksi = res
      })
  }

}
