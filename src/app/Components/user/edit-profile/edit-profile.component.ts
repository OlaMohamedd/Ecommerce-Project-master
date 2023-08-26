import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user: User | null = null; // Define the User interface and initialize user

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Get the current user from the AuthService
    this.user = this.authService.currentUser;
  }

  onSubmit() {
    if (this.user) {
      // Call a service method to update user data
      this.authService.updateUserData(this.user).subscribe(
        updatedUser => {
          // Handle success (optional)
          console.log('User data updated:', updatedUser);
          // Navigate back to the user profile page
          this.router.navigate(['/user/profile']);
        },
        error => {
          // Handle error (optional)
          console.error('Error updating user data:', error);
        }
      );
    }
  }
}
