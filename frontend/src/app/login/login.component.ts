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

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  public onSubmit() {
    var userLogin = new UserLogin(this.model.userName, this.model.password);
    this.loginService.login(userLogin).subscribe(results => {
      this.displayPopup = "block";
    });

  }

  public onCloseHandled(){
    this.displayPopup = "none";
  }

}
