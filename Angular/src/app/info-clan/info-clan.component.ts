import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-info-clan',
  templateUrl: './info-clan.component.html',
  styleUrls: ['./info-clan.component.css']
})
export class InfoClanComponent implements OnInit {
  
  
   
  users:  UserInterface[];
  logged_user : UserInterface = null;

  constructor(private apiService: ApiService) { }

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
      console.log(this.logged_user != null);
      if(this.logged_user != null && this.logged_user.clan == "guerriero"){
        document.getElementById("visitatore").innerHTML = "";
        document.getElementById("orco").innerHTML = "";
        document.getElementById("elfo").innerHTML = "";
      }
      else if(this.logged_user != null && this.logged_user.clan == "elfo"){
        document.getElementById("visitatore").innerHTML = "";
        document.getElementById("orco").innerHTML = "";
        document.getElementById("guerriero").innerHTML = "";
      }
      else if(this.logged_user != null && this.logged_user.clan == "orco"){
        document.getElementById("visitatore").innerHTML = "";
        document.getElementById("guerriero").innerHTML = "";
        document.getElementById("elfo").innerHTML = "";
      }
      else{
        document.getElementById("guerriero").innerHTML = "";
        document.getElementById("orco").innerHTML = "";
        document.getElementById("elfo").innerHTML = "";
      }
    })
  }

}
