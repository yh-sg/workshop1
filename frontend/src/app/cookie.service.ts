import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

// const SERVER = 'http://localhost:3000/api/cookie'
const SERVER = "/api/cookie"

//model
export interface CookieText {
    cookie: string;
}

@Injectable()
export class CookieService {
    constructor(private http: HttpClient) { }

    async getCookies(n = 1): Promise<CookieText[]> {
        // query string
        const params = new HttpParams().set('count', `${n}`);
        
        // construct the call
        //GET api/cookie?count=n
        const res = await this.http.get<any>(SERVER, {params})
            .toPromise()

        if(n==1) 
            return [res as CookieText]

        return res as CookieText[]
    }
}