import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { CacheService } from "ionic-cache";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CacheProvider {

    constructor(public http: Http, private cache: CacheService) { }

    loadList(parans) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let url = "http://localhost:60643/api/account/login";
        let cacheKey = url;
        let request = this.http.post(url, parans, {
            headers: headers,
            method: "POST",
            params: parans
        }).map(
            (res: Response) => { return res.json(); }
        );

        let delayType = 'all'; // send new request to server everytime, if it's set to none it will send new request only when entry is expired
        let response = this.cache.loadFromDelayedObservable(cacheKey, request, delayType);

        response.subscribe(data => {
            debugger
            console.log("Data:" + data.json());
        });
        


        //return this.cache.loadFromObservable(cacheKey, request).subscribe((res: Response) => { console.log(res); });
    }

}
