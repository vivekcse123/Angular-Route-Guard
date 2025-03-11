import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined' && sessionStorage) {
      const storedData = sessionStorage.setItem("isLoggedIn", "false");
      console.log(storedData);
    } else {
      console.warn('sessionStorage is not available in this environment.');
    }
  }
  username: string = "";
  password: string = "";
  message: string = "";
  isSucces: boolean = false;
  login(){
    if(this.username.trim().length == 0){
      this.message = "Username is required...!";
      this.isSucces = false;
    }
    else if(this.password.trim().length == 0){
      this.message = "Password is required...!";
      this.isSucces = false;
    }
    else if(this.username == "vermavivek0402@gmail.com" && this.password == "vivu123"){
      sessionStorage.setItem("isLoggedIn", "true");
      this.isSucces = true;
      this.message = "Login successfully..! redirecting to home page....!";
      setTimeout(() =>{
        this.router.navigate(["/home"]);
      }, 2000);
    }
    else{
      this.message = "Invalid username or password";
      this.isSucces = false;
    }
  }
}
