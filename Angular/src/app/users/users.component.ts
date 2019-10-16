import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  constructor(private apiService : ApiService) { }

  index: number;
  users:  UserInterface[]  = [{ id :  null , username: null, email: null, 
    password : null, nome: null, cognome: null,  
    password_confirmation: null, clan: null, 
    img_profile: null, logged:null, 
    win: null, lost: null, status: null  }];

    ngOnInit() {
      this.apiService.readClassificaUsers().subscribe((users: UserInterface[])=>{
        this.users = users;
        this.index = users.length;
        /*for(var i = this.index-1; i>=0; i--){
          var max : UserInterface= this.users_server[i];
          var pos = i;
          console.log(i , max);
          for(var j = 0; j<= i; j++){
            console.log(max.win, max.id);
            console.log(this.users_server[j].win, this.users_server[j].id);
              if(this.users_server[j].win > max.win && !this.users.includes(this.users_server[j])){
                max = this.users_server[j];
                pos = j;
                console.log(j,max);
              }
          }
          
          this.users.push(max);
          
        }*/
        console.log(this.users);
      })
    }

    
    

    /*createUser(form){
      if(this.selectedUser.password == this.selectedUser.password_confirmation){
        form.value.win = 2;
        form.value.lost = 3;
        form.value.logged = 0;
        if(form.value.clan == 'guerriero'){
          form.value.img_profile = 'guerriero1.jpeg';
        }
        else if(form.value.clan == 'elfo'){
          form.value.img_profile = 'elfo1.jpeg';
        }
        else{
          form.value.img_profile = 'orco1.jpeg';
        }
        this.apiService.createUser(form.value)
            .subscribe((user: UserInterface)=>{
            console.log("User created, ", user);
          });
        return 'create';
      }
      else{
        console.log('Password non coincidenti.')
      }
    }
  
    
  
    deleteUser(id){
      this.apiService.deleteUser(id).subscribe((user: UserInterface)=>{
        console.log("User deleted, ", user);
      });
    }*/
}



