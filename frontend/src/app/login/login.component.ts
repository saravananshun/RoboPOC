import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/loginservice";
import {UserLogin} from "../model/UserLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'app';
  model: any = {};

  animal: string;
  name: string;
  displayPopup:string = "none";
  serverError:boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  public onSubmit() {
    var userLogin = new UserLogin(this.model.userName, this.model.password);
    this.serverError = false;
    this.loginService.login(userLogin).subscribe(results => {
      if(results[0].success == 'true'){
        this.displayPopup = "block";
      }else{
        this.serverError = true;
      }
    });
  }

  public onCloseHandled(){
    this.displayPopup = "none";
  }

}
