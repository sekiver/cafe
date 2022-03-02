import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.page.html',
  styleUrls: ['./single-menu.page.scss'],
})
export class SingleMenuPage implements OnInit {

  menus: any = []

  constructor(
    public ActiveRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Get Data Menu dari Parameter
    this.menus = JSON.parse(this.ActiveRoute.snapshot.paramMap.get("menu"))
    console.log(this.menus)
  }

}
