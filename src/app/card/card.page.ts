import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  user : any
  profile : any = {}
  constructor() { 
    this.getProfile()
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getProfile()
  }

  getProfile() {
    this.user = JSON.parse(localStorage.getItem("login"))
    this.profile = JSON.parse(localStorage.getItem("member"))
    console.log(this.profile)
  }

}
