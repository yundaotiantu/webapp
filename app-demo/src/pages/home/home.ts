import { Component } from '@angular/core';
import {IonicPage , NavParams ,  NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products = [];

  pno =1 ;

  hasMoreData:boolean =true;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public httpClient:HttpClient) {

  }

  ionViewDidLoad() {
    console.log('IndexPage 视图加载完成');
    let url = '/product/1';
    this.httpClient.get(url).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

  doInfinite(event):void{
    setTimeout(()=>{
      let url = `/products/${++this.pno}`;
      this.httpClient.get(url).subscribe(
        res=>{
          if(res['length']<20){
            this.hasMoreData = false;
          }else{
            this.products = this.products.concat(res);
          }
        },
        error=>{
          console.log('err');
        }
      )
      event.complete();
    },500)
  }

}
