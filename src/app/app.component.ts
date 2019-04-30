import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, os: OneSignal) {
    platform.ready().then(() => {

      if (window.cordova){  
        setTimeout(() => {
          window["plugins"].OneSignal
          .startInit("1815eff6-7903-449b-a482-856743a0d06a", "388976054901")
          .endInit();
        },2000);
      }  
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

