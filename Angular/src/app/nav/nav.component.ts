import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ApiService } from '../api.service';
import { UserInterface } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
   showmenu = false;
   isCollapsed = false;
   
   users:  UserInterface[];
   logged_user : UserInterface = null;
  
  constructor(private apiService : ApiService,  private router: Router) {

  }

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
        document.getElementById("not-login").innerHTML = "";
      }
      else{
        
        document.getElementById("login").innerHTML = "";
      }
    })
  }

  logoutUser(){
    this.logged_user.logged = 0;

    this.apiService.updateUser(this.logged_user).subscribe((user: UserInterface)=>{
      console.log("User sloggato" , user);
    });
    
    this.router.navigate(['/home']);
  }

  newUser() {
    this.onNewUser.emit();
  }
  toggleaMenu(){
    this.showmenu = !this.showmenu;
  }


}
