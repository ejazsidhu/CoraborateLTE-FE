import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import * as $ from 'jquery';
@Injectable()

export class ConfigService  {

  public ip= 'https://www.cricdreamteam.com';
  public port = '';
  public api = 'api/CoraborateWebAPI';
  public API_KEY = 'X-SF4_?4$';
  public apiAccount= 'api/AccountWebAPI';

  constructor(private http: Http) { }

  urlBuilder(controlerAction) {
    if (this.port != '') {
      return this.ip + ":" + this.port + "/" + this.api + "/" + controlerAction;
    }
    else
      return this.ip + "/" + this.api + "/" + controlerAction;
  }

  urlBuilderAccounts(controlerAction) {
    if (this.port != '') {
      return this.ip + ":" + this.port + "/" + this.apiAccount + "/" + controlerAction;
    }
    else
      return this.ip + "/" + this.apiAccount + "/" + controlerAction;
  }

  headerCTJson() {
    let header = new Headers({ 'content-type': 'application/json' });
    header.append("API_KEY", this.API_KEY);
    return header;
  }

  headerCTUrlencoded() {
    let header = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });
    header.append("API_KEY", this.API_KEY);
    return header;
  }
}
