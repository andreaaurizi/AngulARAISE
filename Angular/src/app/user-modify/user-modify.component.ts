import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {
  constructor(private apiService : ApiService) { }

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
        for(var i = 0; i<users.length; i++){
        
          if(users[i]['logged'] == 1){
            this.selectedUser = users[i];
          }
        }
      })
    }

    
    updateUser(form){
        console.log(form);
        form.value.id = this.selectedUser.id;
        this.apiService.updateUser(form.value).subscribe((user: UserInterface)=>{
          console.log("User updated" , user);
        });
        return 'update';
      
    }

  
    
  
    deleteUser(){
      this.apiService.deleteUser(this.selectedUser.id).subscribe((user: UserInterface)=>{
        console.log("User deleted, ", user);
      });
    }
}