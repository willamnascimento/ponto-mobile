import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the SqlStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqlStorage {
	storage: any;
    DB_NAME: string = '__ionicstorage';

  	constructor(public platform: Platform, public sqlite: SQLite) {

		if (!this.platform.is('cordova')) {
	      
	      console.log('I am on a web browser')
	    } else {
	      
	      this.platform.ready().then(() => {

	            this.sqlite.create({ name: this.DB_NAME, location: 'default' })
	                .then((db: SQLiteObject) => {
	                    this.storage = db;
	                    this.tryInit();
	            });
	        });
	    }
    }

    tryInit() {
        this.query('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)')
        .catch(err => {
            console.error('Unable to create initial storage tables', err.tx, err.err);
        });
    }

    query(query: string, params: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.storage.transaction((tx: any) => {
                        tx.executeSql(query, params,
                            (tx: any, res: any) => resolve({ tx: tx, res: res }),
                            (tx: any, err: any) => reject({ tx: tx, err: err }));
                    },
                    (err: any) => reject({ err: err }));
            } catch (err) {
                reject({ err: err });
            }
        });
    }

    /** GET the value in the database identified by the given key. */
    get(key: string): Promise<any> {
        return this.query('select key, value from kv where key = ? limit 1', [key])
        .then(data => {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    }

    /** SET the value in the database for the given key. */
    set(key: string, value: string): Promise<any> {
        return this.query('insert into kv(key, value) values (?, ?)', [key, value]);
    }

    /** REMOVE the value in the database for the given key. */
    remove(key: string): Promise<any> {
        return this.query('delete from kv where key = ?', [key]);
    }
}
