import { Injectable } from '@angular/core';
import { UrlManagerService } from "../url-manager/url-manager.service";
import { HttpService } from "../http/http.service";
import { HttpRequestOptions } from "../../models/http-request.options";

import { HttpRequestParamsOptions } from "../../models/http-request-params.options";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(
    private urlManager: UrlManagerService,
    private http: HttpService
  ) {}



  public weatherData(location:string,currentDate:string,nextDate:string): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: HttpRequestParamsOptions = {
        host: this.urlManager.getData(),
        headers: {
          "Content-Type": "application/json"
        },
        qs: { "id": "FORECAST","id2":"GENERAL","location":location,"date1":currentDate,"date2":nextDate }
      };
      this.http.get(options).subscribe(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }


}



