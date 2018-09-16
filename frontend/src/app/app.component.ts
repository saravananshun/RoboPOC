import {Component, OnInit} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  model: any = {};

  public ngOnInit() {

  }

  public onSubmit() {
    /*if ($("#username").val() == null || $("#username").val() == "") {
      $('#emptyUidError').toggleClass("hidden shown");
    }

    if ($("#password").val() == null || $("#password").val() == "") {
      $('#emptyPasswordError').toggleClass("hidden shown");
    }*/

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

  }

}

