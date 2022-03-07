import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any = {}
  result:any = {}

  constructor(
    public http:HttpClient,
    public nav:NavController
  ) { }

  ngOnInit() {
    if(localStorage.getItem("login")){ this.nav.navigateRoot("tabs/tab1") }
  }

  goLogin(){

    console.log(this.login)

    let headers: any = new HttpHeaders()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    this.http.post("http://localhost:8000/api/login", JSON.stringify(this.login), headers).toPromise()
      .then(res => {
        this.result = res
        if (this.result.error == "0") {
          localStorage.setItem("login", JSON.stringify(this.result.data))
         // this.notif.Toast(this.result.mess, 1000, 'success')
          this.nav.navigateRoot("tabs/tab1")
        } else {
         // this.notif.Toast(this.result.mess, 1000, 'danger')
        }
        console.log(this.result)
      })
  }

}
