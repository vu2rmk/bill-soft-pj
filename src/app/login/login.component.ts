import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder,
              private auth: AuthService, 
              private router: Router) { 
                this.form = fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]

                });
              }

  ngOnInit() {
  }

  loginUser(event){

    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.auth.getUserDetails(username,password).subscribe(data => {
        this.router.navigate(['customer']);
        this.auth.setLoggedIn("true");
        console.log(data);
      }
    );
    console.log(username,password);

  }

  login(){

    if(this.form.valid){
      const username = this.form.value.username;
      const password = this.form.value.password;
      this.auth.getUserDetails(username,password).subscribe(data => {
          this.router.navigate(['customer']);
          this.auth.setLoggedIn("true");
          console.log(data);
        }
      );
      console.log(username,password);
    }else{
      console.log(this.form.value.username);
    }


  }

}
