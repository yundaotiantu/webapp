import { Component } from '@angular/core';
import {IonicPage ,  NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    email:'',
    password:''
  }

  constructor(public navCtrl: NavController , public httpClient : HttpClient ) {

  }

  signIn():void{
    let url = '/signIn';
    this.httpClient.post(url,{user:this.user}).subscribe(
      (res)=>{
        if(res['status']==='OK'){
          this.navCtrl.push('IndexPage');
        }else{
          console.error('登录失败')
        }
      },
      (err)=>{}
      );
  }

  signUpPage():void{
    this.navCtrl.push('SignUpPage');
  }

}
