import {Injectable, EventEmitter} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

@Injectable()
export class StatisticsApiService {

    constructor(
        private http: Http
    ) { }

    getHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Accept", "application/json");
        headers.append("Access-Control-Allow-Origin", "https://calm-eyrie-82472.herokuapp.com/");
        headers.append("Access-Control-Allow-Credentials", "true");

        return new RequestOptions({ headers: headers, withCredentials: true });
    }

    getStats() {
        let body = null;
        return this.http.get("https://fantasy.premierleague.com/drf/bootstrap-static", this.getHeaders())
            .map((response: Response) => {
                return response.json();
            });
    }

}
