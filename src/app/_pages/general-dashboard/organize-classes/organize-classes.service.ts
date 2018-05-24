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

export class OrganizeClassesService {

    constructor(private _http: Http,
        private _config: ConfigService) {

    }

    GetOwnedClasses(UserId: number) {

        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "GetOwnClassess?userId="+ UserId +"";
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderE2E(action);
        console.log(url);
        return this._http.get(url, option).map(
            response => response.json()
        );
    }
    
    ArchiveClassesservice(UserId: number, ClassId:number) {

        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "archivedClass?userId="+ UserId +"&classId="+ ClassId +"";
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderE2E(action);
        console.log(url);
        return this._http.get(url, option).map(
            response => response.json()
        );
    }
    
    RestoreClassesservice(UserId: number, ClassId:number) {

        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "restoreClass?userId="+ UserId +"&classId="+ ClassId +"";
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderE2E(action);
        console.log(url);
        return this._http.get(url, option).map(
            response => response.json()
        );
    }
    GetArchivedClasses(UserId: number) {

        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "getArchivedClassess?userId="+ UserId +"";
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderE2E(action);
        console.log(url);
        return this._http.get(url, option).map(
            response => response.json()
        );
    }


}