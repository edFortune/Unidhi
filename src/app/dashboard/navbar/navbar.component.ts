import { Component, HostListener } from '@angular/core';
import { CommonService } from '../../common.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  previousScroll = 0;
  constructor(public commonService: CommonService, private translate: TranslateService) {
    translate.setDefaultLang('en');

    this.loadjscssfile("assets/style/main.scss", "css");
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60 && currentScroll < document.documentElement.scrollHeight - window.innerHeight) {
      if (currentScroll > this.previousScroll) {
        this.hideNavbar();
      } else {
        this.showNavbar();
      }
      this.previousScroll = currentScroll;
    }
  }


  hideNavbar = () => {
    setTimeout(() => {
      this.commonService.navbarToggleValue = true;
    }, 100);
  }

  showNavbar = () => {
    setTimeout(() => {
      this.commonService.navbarToggleValue = false;
    }, 100);
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
