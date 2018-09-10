import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  sidenavWidth = 4;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }

}
