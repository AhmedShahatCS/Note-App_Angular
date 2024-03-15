import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usertoken:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient) {
  this.setUserToken()
   }
  handelRegister(userdata:User):Observable<any>{
    return this._HttpClient.post(environment.baseUrl+'signUp',userdata)
  }

  handlLogin(userdata:User):Observable<any>{
    return this._HttpClient.post(environment.baseUrl+'signIn',userdata)
  }

  setUserToken():void{
    let token=localStorage.getItem('etoken')
    if(token!==null){
      this.usertoken.next(token)
    }
  }
}
