import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,Validator,FormGroup, Form, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;


  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.login();
    
  }

createLoginForm(){
this.loginForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required]
})
}


login(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    let loginModel=Object.assign({},this.loginForm.value)

    this.authService.login(loginModel).subscribe(response=>{
      this.toastrService.info(response.message)
      console.log(response)
      localStorage.setItem("token",response.data.token)
    },responseError=>{
      this.toastrService.error(responseError.error)
      
    });
   
  }
}


}
