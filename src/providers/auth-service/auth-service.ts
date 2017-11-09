import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

export class User {
    email: string;
    senha: string;

    constructor(email: string, senha: string) {
        this.email = email;
        this.senha = senha;
    }
}

@Injectable()
export class AuthService {
    private API_URL = 'http://localhost:60643/api/account/';
    currentUser: User;

    constructor(public http: Http) { }

    public login(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            //let a = this.http.post(this.API_URL + "login", credentials, {
            //    headers: headers,
            //    method: "POST",
            //    params: credentials
            //}).map(
            //    (res: Response) => { return res.json(); }
            //    );


            return Observable.create(observer => {
                debugger
                // At this point make a request to your backend to make a real check!
                let access = (credentials.password === "pass" && credentials.email === "email");
                this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    }

    public register(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            // At this point store the credentials to your backend!
            return Observable.create(observer => {
                observer.next(true);
                observer.complete();
            });
        }
    }

    public getUserInfo(): User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }
}