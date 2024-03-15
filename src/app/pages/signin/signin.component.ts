import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  msgErr: string = ""
  isloading: boolean = false

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  loginForm: FormGroup = new FormGroup({

    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)]),
  });

  handelForm(): void {
    this.isloading = true
    // console.log(this.registerForm);
    if (this.loginForm.valid) {
      this._AuthService.handlLogin(this.loginForm.value).subscribe({
        next: (response) => {
          // console.log(response);
          this.isloading = false
          
          if (response.msg == "done") {
            localStorage.setItem("etoken", '3b8ny__' + response.token)
          this._AuthService.setUserToken()

            this._Router.navigate(['note'])
          }


        },
        error: (err) => {
          console.log(err);
          this.msgErr = err.error.msg
          this.isloading = false

        }
      })
    }

  }



}

