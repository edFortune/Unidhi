import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  constructor() {
    //CSS
    this.loadjscssfile("assets/css/bootstrap.min.css", "css");

    this.loadjscssfile("assets/css/font-awesome.min.css", "css");
    this.loadjscssfile("assets/css/animate.css", "css");
    this.loadjscssfile("assets/css/prettyPhoto.css", "css");

    this.loadjscssfile("assets/css/style.css", "css");

    //JS

    this.loadjscssfile("assets/js/wow.min.js", "js");
    this.loadjscssfile("assets/js/bootstrap.min.js", "js");
    this.loadjscssfile("assets/js/jquery.prettyPhoto.js", "js");
    this.loadjscssfile("assets/js/jquery.isotope.min.js", "js");
    this.loadjscssfile("assets/js/functions.js", "js");
  }

  ngOnInit() {

  }

  loadjscssfile(filename: string, filetype: string) {
    var fileref = undefined;
    if (filetype == "js") { //if filename is a external JavaScript file
      fileref = document.createElement('script')
      fileref.setAttribute("type", "text/javascript")
      fileref.setAttribute("src", filename)
    } else if (filetype == "css") { //if filename is an external CSS file
      fileref = document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
  }

}
