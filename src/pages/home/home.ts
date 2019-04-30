import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public os: OneSignal) {

    // setTimeout(()=>{
    //   window["plugins"].OneSignal.getIds().then((res) => {
    //     alert(res.pushToken);
    //   }).catch((err)=>{
    //     alert(err);
    //   });
    // },3000);
    
  }

}
