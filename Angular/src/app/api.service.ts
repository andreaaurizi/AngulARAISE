import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInterface } from  './interfaces/user';
import { Observable } from  'rxjs';
import { User } from './classes/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost";
 
  constructor(private httpClient: HttpClient) {

  }
  
  readUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/Angular_function/read.php`);
  }

  readClassificaUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/Angular_function/classifica.php`);
  }

  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/Angular_function/create.php`, user);
  }

  updateUser(user: User){
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/Angular_function/update.php`, user);   
  }

  deleteUser(id: number){
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/Angular_function/delete.php/?id=${id}`);
  }
}
