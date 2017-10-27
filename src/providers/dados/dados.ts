import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SqlStorage } from '../sql-storage/sql-storage';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Dados {
    private API_URL = 'http://localhost:60643/api/account/';

    constructor(public http: Http) { }

    createAccount(parans) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.API_URL + "add", parans, {
            headers: headers,
            method: "POST",
            params: parans
        }).map(
            (res: Response) => { return res.json(); }
            );
    }

    login(parans) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.API_URL + "login", parans, {
            headers: headers,
            method: "POST",
            params: parans
        }).map(
            (res: Response) => { return res.json(); }
            );
    }

    getAll(page: number) {
        
    }

    get(id: number) {
        
    }

    insert(user: any) {
        
    }

    update(user: any) {
        
    }

    remove(id: number) {
        
    }
}

