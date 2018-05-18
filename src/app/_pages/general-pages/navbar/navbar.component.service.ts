import { Injectable } from '@angular/core';
// import { ClassesOwned } from '../ClassesViews';
import { Http, Headers, Response, RequestOptions, BaseRequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import { ConfigService } from '../../../_services/config/config.service';
import { Options } from 'selenium-webdriver/opera';
import { _catch } from 'rxjs/operator/catch';
@Injectable()

export class navbarcomponentservice {

    constructor(private _http: Http,
        private _config: ConfigService) {

    }

    GetAllClassesService(UserId: number) {

        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "GetAllClassess?userId=1"
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderAccounts(action);
        console.log(url);
        debugger;
        
        // console.log(obj)
        // let Bodyobject = JSON.stringify(obj);
        // let head = JSON.stringify(httpOption);
        // console.log(Bodyobject);

        return this._http.post(url, option).map(
            response => response.json()
        );
    }
}