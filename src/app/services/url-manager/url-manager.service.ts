import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class UrlManagerService {
  constructor() {}

  public getData(): string {
    return `${environment.API_HOST}/data`;
  }


}
