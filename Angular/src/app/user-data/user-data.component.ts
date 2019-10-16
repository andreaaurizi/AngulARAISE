import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user:  UserInterface  = { id :  null , username: null, email: null, 
    password : null, nome: null, cognome: null,  
    password_confirmation: null, clan: null, 
    img_profile: null, logged:null, 
    win: null, lost: null, status: null  };
  private users : UserInterface[];
  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.apiService.readUsers().subscribe((users: UserInterface[])=>{
      this.users = users;
      console.log(this.users);
      for(var i = 0; i<users.length; i++){
        
        console.log(this.users[i].logged);
      
        if(users[i]['logged'] == 1){
          this.user = users[i];
        }
      }
      console.log(this.user);
    })
  }
  backToUsers(){
    this.router.navigate(['users']);
  }
  
}
