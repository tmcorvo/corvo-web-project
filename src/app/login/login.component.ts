import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 selector: 'login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username!: string;
 password!: string;

 hide = true;

 constructor(private router: Router) { }

 ngOnInit(): void {
 }

 onSubmit(): void {
    // Add your login logic here
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Navigate to the dashboard page after successful login
    if (this.username.length > 0 && this.password.length > 0){
      this.router.navigate(['/home']);
    }
   }
}