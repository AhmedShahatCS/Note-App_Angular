import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  msgErr:string=""
  isloading:boolean=false

  constructor(private _AuthService:AuthService,private _Router:Router ){}
  registerForm:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)]),
    age:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  });

  handelForm():void{
    this.isloading=true
    // console.log(this.registerForm);
    if(this.registerForm.valid){
      this._AuthService.handelRegister(this.registerForm.value).subscribe({
        next:(response)=>{
          // console.log(response);
          this.isloading=false
          if(response.msg=="done"){
            this._Router.navigate(['signin'])
          }
        
          
        },
        error:(err)=>{
          // console.log(err);
          this.msgErr=err.error.msg
          this.isloading=false
          
        }
      })
    }
    
  }

}
