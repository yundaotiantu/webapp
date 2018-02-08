import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

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
