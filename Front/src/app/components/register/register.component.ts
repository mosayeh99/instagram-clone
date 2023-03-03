import { Component , OnInit  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit  {
  data: any = {};
  form: any = {
    email: null,
    name: null,
    username: null,
    password: null,
}

isSuccessful = false;
isSignUpFailed = false;
isLoggedIn = true;
errorMessage = '';

constructor(private authService: AuthService, private router: Router , private route:ActivatedRoute) {}

ngOnInit(): void {}


onSubmit(): void {
  const { email, name ,username , password } = this.form;

    this.authService
    .register(email,name,username,password)
    .subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (e) => {
        console.log(e);
        this.errorMessage = e.error.message;
        this.isSignUpFailed = true;
      },
      complete: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isLoggedIn = false;

        //redirect this.data.role
        if (this.data) {
          const returnUrl =this.route.snapshot.queryParams["returnUrl"] ||'login';
          this.router.navigateByUrl(returnUrl) ;
        } 
      },
    });
}
}
