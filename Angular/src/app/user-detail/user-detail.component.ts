import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
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

    
    

    createUser(form){
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
    }
}

