import { Component, OnDestroy } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  email = '';
  password = '';
  errorMessage = '';
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.getUserStatus().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.errorMessage = '';
        // alert("you are already logged in !!")
        this.router.navigate(['/home']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      loginSuccess => {
        if (loginSuccess) {
          this.errorMessage = '';
          alert("you have logged in successfully !")
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Username or password is incorrect. Please try again.';
          this.email = '';
          this.password = '';
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
