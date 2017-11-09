import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CacheProvider } from '../../providers/cache/cache';


@IonicPage()
@Component({
  selector: 'page-apontamento',
  templateUrl: 'apontamento.html',
})
export class ApontamentoPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public cache: CacheProvider) {
        
    }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApontamentoPage');
  }

}
