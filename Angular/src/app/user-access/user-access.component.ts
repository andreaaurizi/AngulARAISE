import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  constructor(private apiService : ApiService, private router: Router) { }

  users:  UserInterface[];
  selectedUser:  UserInterface  = { id :  null , username: null, email: null, 
                                    password : null, nome: null, cognome: null,  
                                    password_confirmation: null, clan: null, 
                                    img_profile: null, logged:null, 
                                    win: null, lost: null, status: null  };

    ngOnInit() {
      this.apiService.readUsers().subscribe((users: UserInterface[])=>{
        this.users = users;
        console.log(this.users);
      })
    }

    

    loginUser(form){
      var list = this.users;
      var i = 0;
      console.log(list);
      while(i < list.length){
        if(list[i].email == form.value.email && list[i].password == form.value.password){
          this.selectedUser = list[i];
          form.value.id = this.selectedUser.id;
          form.value.username = this.selectedUser.username;
          form.value.email = this.selectedUser.email;
          form.value.password = this.selectedUser.password;
          form.value.nome = this.selectedUser.nome;
          form.value.cognome = this.selectedUser.cognome;
          form.value.clan = this.selectedUser.clan;
          form.value.logged = 1;
          form.value.win = this.selectedUser.win;
          form.value.lost = this.selectedUser.lost;
          form.value.status = this.selectedUser.status;
          console.log(form.value);
          this.apiService.updateUser(form.value).subscribe((user: UserInterface)=>{
            console.log("User loggato" , user);
          });
          this.router.navigate(['/home']);
          return;
        }
        i++;
      }
      console.log("Idea carina, ma non worka.")
      
    }
  
    selectUser(user: UserInterface){
      this.selectedUser = user;
    }
  

  

}