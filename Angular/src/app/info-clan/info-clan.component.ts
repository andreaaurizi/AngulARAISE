import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-info-clan',
  templateUrl: './info-clan.component.html',
  styleUrls: ['./info-clan.component.css']
})
export class InfoClanComponent implements OnInit {
  
  
  clan_users: UserInterface[]= [{ id :  null , username: null, email: null, 
                                  password : null, nome: null, cognome: null,  
                                  password_confirmation: null, clan: null, 
                                  img_profile: null, logged:null, 
                                  win: null, lost: null, status: null  }];
  users:  UserInterface[];
  logged_user : UserInterface = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() { //readClassificaUsers
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
      
      if(this.logged_user != null){
        console.log("Porco Dio");
        for(var i = 0; i < this.users.length; i++){
          if(this.users[i].clan == this.logged_user.clan){
            this.clan_users.push(this.users[i]);
          }
        }
        
        this.users = this.clan_users.slice(1,this.clan_users.length);
        
      }
    })
  }

}
