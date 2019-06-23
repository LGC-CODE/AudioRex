import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.host + '/user-db');
  }

  getUser(uid) {
    return this.http.get(environment.host + '/user-db/' + uid);
  }
}
