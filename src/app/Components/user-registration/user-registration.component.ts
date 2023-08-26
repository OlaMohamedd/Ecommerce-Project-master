import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  apiURL = 'http://localhost:3000/users';

  constructor(private fb: FormBuilder, private http: HttpClient , private router:Router) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.http.post(this.apiURL, this.userForm.value).subscribe(
        (response) => {
          console.log('User added:', response);
          this.userForm.reset();
          alert("You have successfully Registered your account now try to login ! ");
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  }
}
