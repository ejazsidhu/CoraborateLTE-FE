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

export class signupcomponentservice {

    constructor(private _http: Http,
        private _config: ConfigService) {

    }

    SignupDataService(Id:number, FirstName: string, LastName:string, Email:string, PhoneNumber: string, Birthday: string, Password:string, Gender: string) {

        
        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "Signup"
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderAccounts(action);
        console.log(url);
        debugger;
        let obj = {"Id": Id, "FirstName": FirstName, "LastName": LastName, "Email": Email, "PhoneNumber": PhoneNumber, "Birthday": Birthday, "Password": Password, "Gender": Gender }
        console.log(obj)
        let Bodyobject = JSON.stringify(obj);
        let head = JSON.stringify(httpOption);
        console.log(Bodyobject);

        return this._http.post(url, Bodyobject, option).map(
            response => response.json()
        );
    }
    SignupCodeService(FirstName: string, LastName:string, Email:string, PhoneNumber: string, Birthday: string, Password:string, Gender: string, Identity:string) {

        
        let httpOption = this._config.headerCTJson();
        const option = new RequestOptions({ headers: httpOption });
        var action= "Signup"
        // let url = "https://www.cricdreamteam.com/api/AccountWebAPI/LogIn";
        let url = this._config.urlBuilderAccounts(action);
        console.log(url);
        debugger;
        let obj = { "FirstName": FirstName, "LastName": LastName, "Email": Email, "PhoneNumber": PhoneNumber, "Birthday": Birthday, "Password": Password, "Gender": Gender, "Identity": Identity }
        console.log(obj)
        let Bodyobject = JSON.stringify(obj);
        let head = JSON.stringify(httpOption);
        console.log(Bodyobject);

        return this._http.post(url, Bodyobject, option).map(
            response => response.json()
        );
    }
}