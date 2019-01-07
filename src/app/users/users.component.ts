import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../model/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private router: Router, private apiService: ApiService) { }
 
  
  ngOnInit() {
    this.apiService.getUsers()
    .subscribe( response => {
     this.users = response.data;
     console.log(response)
});
}

addUser(): void {
  this.router.navigate(['user-register']);
};

editUser(user: User): void {
  window.localStorage.removeItem("editUserId");
  window.localStorage.setItem("editUserId", user.id.toString());
  this.router.navigate(['user-edit']);
};

deleteUser(user: User): void {
  this.apiService.deleteUser(user.id)
    .subscribe( response => {
      console.log(response);
      this.users = this.users.filter(u => u !== user);
      
    })
};


}
