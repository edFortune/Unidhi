import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit, OnDestroy {

  constructor() {

    var hs = document.getElementsByTagName('style');
    for (var i = 0, max = hs.length; i < max; i++) {
      if (hs[i]) {
        hs[i].parentNode.removeChild(hs[i]);
      }
    }

  }

  ngOnInit() {
    //CSS
    this.jscssfileState("assets/css/bootstrap.min.css", "css", "load");
    this.jscssfileState("assets/css/font-awesome.min.css", "css", "load");
    this.jscssfileState("assets/css/animate.css", "css", "load");
    this.jscssfileState("assets/css/prettyPhoto.css", "css", "load");
    this.jscssfileState("assets/css/style.css", "css", "load");

    //JS
    this.jscssfileState("assets/js/wow.min.js", "js", "load");
    this.jscssfileState("assets/js/bootstrap.min.js", "js", "load");
    this.jscssfileState("assets/js/jquery.prettyPhoto.js", "js", "load");
    this.jscssfileState("assets/js/jquery.isotope.min.js", "js", "load");
    this.jscssfileState("assets/js/functions.js", "js", "load");
  }

  ngOnDestroy() {
    //CSS
    this.jscssfileState("assets/css/bootstrap.min.css", "css", "destroy");
    this.jscssfileState("assets/css/font-awesome.min.css", "css", "destroy");
    this.jscssfileState("assets/css/animate.css", "css", "destroy");
    this.jscssfileState("assets/css/prettyPhoto.css", "css", "destroy");
    this.jscssfileState("assets/css/style.css", "css", "destroy");

    //JS
    this.jscssfileState("assets/js/wow.min.js", "js", "destroy");
    this.jscssfileState("assets/js/bootstrap.min.js", "js", "destroy");
    this.jscssfileState("assets/js/jquery.prettyPhoto.js", "js", "destroy");
    this.jscssfileState("assets/js/jquery.isotope.min.js", "js", "destroy");
    this.jscssfileState("assets/js/functions.js", "js", "destroy");
  }


  jscssfileState(filename: string, filetype: string, state: string) {
    if (state == "load")
      this.loadjscssfile(filename, filetype);
    else if (state == "destroy")
      this.removejscssfile(filename, filetype);
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

  removejscssfile(filename: string, filetype: string) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }

}
