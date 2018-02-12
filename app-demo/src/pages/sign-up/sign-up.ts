import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController ,ToastController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    uname:'',
    upwd:'',
    cpwd:'',
    email:'',
    phone:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams , public httpClient : HttpClient , public alertCtrl:AlertController , public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp():void{
    let url = '/signUp';
    this.httpClient.post(url,{user:this.user}).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
