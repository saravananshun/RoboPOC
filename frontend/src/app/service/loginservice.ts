import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import {UserLogin} from "../model/UserLogin";
import {forkJoin} from "rxjs";


const headers =  new HttpHeaders({ 'Accept': 'application/json; charset=utf-8',
  'Content-Type':'application/json; charset=utf-8'})


@Injectable()
export class LoginService {
  constructor(private http:HttpClient) {}

  private URL = 'http://localhost:8080/api/login';

  public login(userLogin:UserLogin) {
    console.log("userLogin "+userLogin);
    let login = this.http.post<any>(this.URL, userLogin,{headers});
    return forkJoin([login]);
  }
}
