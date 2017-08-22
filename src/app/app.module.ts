// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';

// Services
import {StatisticsApiService} from "./shared/statistics-api.service"

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        StatisticsApiService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
