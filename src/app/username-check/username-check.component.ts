import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {

  username = '';
  isDisabled = true;

  constructor() { }

  ngOnInit() {
    
    this.resetUserName();
  }

  resetUserName() {
    this.username = '';
  }

}


