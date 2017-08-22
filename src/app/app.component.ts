// Angular Core
import { Component, OnInit } from '@angular/core';

// Services
import {StatisticsApiService} from "./shared/statistics-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public statsObject: any;

    constructor(
        private statsService: StatisticsApiService
    ) {}

    ngOnInit() {
        this.statsService.getStats().subscribe(
            data => {
                this.statsObject = data;
                console.log(this.statsObject);
            }
        )
    }
}
