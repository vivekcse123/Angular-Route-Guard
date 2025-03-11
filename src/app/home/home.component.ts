import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  logout(){
    this.router.navigate(["/login"]);
    sessionStorage.setItem("isLoggedIn", "false");
  }
}
