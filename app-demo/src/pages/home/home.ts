import { Component } from '@angular/core';
import {IonicPage , NavParams ,  NavController,AlertController ,ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    uname:'',
    upwd:''
  }

  constructor(public navCtrl: NavController , public httpClient : HttpClient , public navParams: NavParams ,public alertCtrl:AlertController , public toastCtrl:ToastController) {

  }

  signIn():void{
    let url = '/signIn';
    let msg = {
      nreg:/^\w{4,10}$/,
      rchk:/=/,
      chk:/or/ig,
      ureg:/^\w{6,10}$/
    };
    if(this.user.uname==""){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'用户名不能为空',
        buttons:['Ok']
      }).present();
      return;
    }else if(!msg.nreg.test(this.user.uname)){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'用户名格式不正确',
        buttons:['Ok']
      }).present();
      this.user.uname="";
      return;
    }else if(!msg.rchk.test(this.user.uname)){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'用户名格式不正确',
        buttons:['Ok']
      }).present();
      this.user.uname="";
      return;
    }else if(!msg.chk.test(this.user.uname)){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'用户名格式不正确',
        buttons:['Ok']
      }).present();
      this.user.uname="";
      return;
    }else if(this.user.upwd==""){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'密码不能为空',
        buttons:['Ok']
      }).present();
      return;
    }else if(!msg.ureg.test(this.user.upwd)){
      this.alertCtrl.create({
        title:'输入有误',
        subTitle:'密码格式不正确',
        buttons:['Ok']
      }).present();
      this.user.upwd ="";
      return;
    }
    this.httpClient.post(url,{user:this.user}).subscribe(
      (res)=>{
        if(res['code']==='OK'){
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
