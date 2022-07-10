import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserModel } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<any>{
    return this.httpClient.get<User[]>(this.baseUrl + 'users');
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl + 'users/' +  `${id}`);
  }

  createUser(user: UserModel){
    return this.httpClient.post(this.baseUrl + 'users' ,  user, httpOptions);
  }

  updateUser(id: number, user: UserModel){
    return this.httpClient.put(this.baseUrl + 'users/' +   `${id}`, user, httpOptions);
  }

  deleteUser(id: number,){
    return this.httpClient.delete(this.baseUrl + 'users/' + `${id}`, httpOptions);
  }
}