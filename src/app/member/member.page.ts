import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  profile:any={}
  result:any={}
  user:any={}

  constructor(
    public http:HttpClient,
    public nav:NavController,
    public gb: GlobalService
  ) { 
    this.getProfile()
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getProfile()
  }

  getProfile(){
    this.user = JSON.parse(localStorage.getItem("login")) // Get Data User
    this.profile = JSON.parse(localStorage.getItem("member")) ? JSON.parse(localStorage.getItem("member")) : {} // If any data in localstorage 
    this.profile.jk = this.profile.jk ? this.profile.jk.toString() : "1"; // Convert JK number to String
    this.profile.id_member = this.user.id_member // Set id_member
    this.profile.user_id = this.user.id // Id User untuk update data ke tabel user
    this.profile.foto = this.user.foto // Foto user disimpan ke data member
  }

  async saveMember(){
     // SHow Loading
     this.gb.show_loading()

     let headers: any = new HttpHeaders()
     headers.append('Accept', 'application/json')
     headers.append('Content-Type', 'application/json')
 
     await this.http.post(this.gb.API_URL+"member", JSON.stringify(this.profile), headers).toPromise()
       .then(res => {
         this.result = res
         if (this.result.error == "0") {
           // Jika request tidak ada error atau berhasil
           localStorage.setItem("login", JSON.stringify(this.result.data.user)) // update data login
           localStorage.setItem("member", JSON.stringify(this.result.data.member)) // update data member
           this.gb.notif(this.result.mess,'success',1500)
         } else {
           this.gb.notif(this.result.mess,'danger',1500)
         }
 
         // Hilangkan Loading
         this.gb.hide_loading();
 
         console.log(this.result)
       })
  }

}
