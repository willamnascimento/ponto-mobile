import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public database: SQLiteObject;
	public invoices: Array<Object>;  
	public counter : number = 0;

  	constructor(public navCtrl: NavController,private sqlite : SQLite) {

  	}

  	ionViewDidEnter(){
	    console.log('view did enter');
	        this.sqlite.create({name: "data.db", location: "default"}).then((db : SQLiteObject) => {
	                this.database = db;
	                //this.createTable();
	            }, (error) => {
	                console.log("ERROR: ", error);
	        });    

	}
}
