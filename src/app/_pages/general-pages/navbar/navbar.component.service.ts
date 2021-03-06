
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
        var action= "GetAllClassess?userId=" + UserId + "";
        //let url = "https://www.cricdreamteam.com/api/E2EWebAPI/GetAllClassess?userId=11";
         let url = this._config.urlBuilderE2E(action);
        console.log(url);
        // debugger;
        let obj= null;
        // console.log(obj)
        let Bodyobject = JSON.stringify(obj);
        // let head = JSON.stringify(httpOption);
        // console.log(Bodyobject);

        return this._http.get(url, option).map(
            response => response.json()
        );
    }
}