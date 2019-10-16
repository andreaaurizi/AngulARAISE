import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:  UserInterface[];
  logged_user : UserInterface = null;

  constructor(private apiService :ApiService) { }

  ngOnInit() {
    this.apiService.readUsers().subscribe((users: UserInterface[])=>{
      this.users = users;
      console.log(this.users);
      for(var i = 0; i<users.length; i++){
        
        console.log(this.users[i].logged);
      
        if(users[i]['logged'] == 1){
          this.logged_user = users[i];
        }
      }
      console.log(this.logged_user);
      if(this.logged_user != null){
        document.getElementById("out").innerHTML = "";
      }
      else{
        
        document.getElementById("in").innerHTML = "";
      }
    })
  }

}
