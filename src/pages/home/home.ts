import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  

  swipeEvent(e) {
    let direction = 'left';
    if (e.direction == '4') {
      direction = 'right';
    } else if(e.direction == '2') {
      direction = 'left';
    }
    let options: NativeTransitionOptions = {
      direction: direction,
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot(TabsPage, {index: "0"});
  }
}
