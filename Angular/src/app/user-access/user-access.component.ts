import {Component, OnInit, Input} from '@angular/core';
import {User} from '../classes/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  private usercopy;
  private __user;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe(params => {
      if(!params.id){
        return;
      }
      this.user = this.userService.getUser(+params.id);

    });
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }

}
