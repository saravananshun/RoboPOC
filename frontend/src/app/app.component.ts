import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ConfirmationdialogComponent} from "./confirmationdialog/confirmationdialog.component";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit() {

  }

  constructor() {
  }

}

