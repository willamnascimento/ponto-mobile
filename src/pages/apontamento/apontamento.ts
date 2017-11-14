import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CacheProvider } from '../../providers/cache/cache';
import * as $ from 'jquery';


@IonicPage()
@Component({
    selector: 'page-apontamento',
    templateUrl: 'apontamento.html',
})
export class ApontamentoPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public cache: CacheProvider) { }

    changeColor() {

    }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

    ionViewDidLoad() {

    }

    Apontar() {
        var data = new Date();
        var horas = data.getHours();
        var minutos = data.getMinutes();
        var c = 0;
        
        $(".row-apontamento").each(function () {
            var row = $(this);

            if (row.attr("apontado") == "false") {
                row.attr("apontado", "true");
                row.find(".horas").text(horas);
                row.find(".minutos").text(minutos);
                row.find(".icon-close").addClass("hidden");
                row.find(".icon-checkmark").removeClass("hidden");
                
                return false;
            }
            
        });
        console.log(c);
    }
}