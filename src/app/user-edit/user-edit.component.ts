import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../model/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  user: User;
  editForm: FormGroup;
  
  ngOnInit() {
    
    let userId = window.localStorage.getItem("editUserId");
    console.log(userId);
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      first_name: ['', Validators.required],
      avatar: ['', Validators.required]
    });

    this.apiService.getUserById(+userId)
      .subscribe( response => {
        console.log(response.data);
        this.user = response.data;
        this.editForm.setValue(this.user);
        
      });
  
     
    }

  onSubmit() {

    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        response => {
            this.router.navigate(['user']);
            console.log(response.data);
        });
       
    }
}
