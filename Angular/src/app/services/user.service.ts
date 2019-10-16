import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {User} from '../classes/User';


@Injectable()

export class UserService {
  users: UserInterface[] = [];
  //private APIURL = 'http://localhost:3000/users';
  private APIURL = 'http://localhost/Angular_function/example.php';

  constructor(private http : HttpClient) {
  }

  getUsers() {
    /*this.http.get(this.APIURL+'.json').subscribe(
        data => {
          var users_server = [];
          for (var i = 0; i < data['length']; i++){
              if (data[i]['nome'] != 'admin' && !this.getUser_byEmail(data[i]['email'])){
                  users_server.push (data[i]['email'])
                  var user_temp = new User();
                  
                  user_temp.email = data[i]['email'];
                  user_temp.nome = data[i]['nome'];
                  user_temp.cognome = data[i]['cognome'];
                  user_temp.username = data[i]['username'];
                  user_temp.clan = data[i]['clan'];
                  user_temp.img_profile = data[i]['img_profile'];
                  this.createUser(user_temp);
                }
          }
          console.log(users_server);

        },
        error => alert(error.message)
    );
    return this.users; */


    this.http.get(this.APIURL).subscribe(
      data => {
        var users_server = [];
        for (var i = 0; i < data['length']; i++){
            
          users_server.push (data[i]['email'])
          var user_temp = new User();
          
          user_temp.email = data[i]['email'];
          user_temp.nome = data[i]['nome'];
          user_temp.cognome = data[i]['cognome'];
          user_temp.username = data[i]['username'];
          this.createUser(user_temp);
            
        }
        console.log(users_server);

      },
      error => alert(error.message)
    );
    return this.users;
  }

  getUser_byEmail(email:string){

    return this.users.find(user => user.email === email);
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }
}

