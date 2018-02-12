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
    email:'',
    uname:'',
    password:'',
    gender:'male',
    age:'',
    city:'Beijing'
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
        if(res['status']==='exist'){
          this.alertCtrl.create({
            title:'Eorror',
            subTitle:'Emial is already exist',
            buttons:['Ok']
          }).present()
        }else if(res['status'] === "err"){
           this.toastCtrl.create({
             message:"服务器错误",
             position:"middle"
           }).present()
        }else{
          this.navCtrl.push('HomePage');
        }
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
