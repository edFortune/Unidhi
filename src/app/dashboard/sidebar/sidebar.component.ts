import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  apiKey = ''
  url = 'https://translation.googleapis.com/language/translate';
  result: any;
  q: any;

  constructor(public commonService: CommonService, private http: HttpClient) {


  }

  ngOnInit() {
    this.q = "Good";
    this.translate();
    console.log(this.result);
  }

  translate(): void {
    let params = new HttpParams();
    params = params.append('q', this.q);
    params = params.append('target', 'es');
    params = params.append('key ', this.apiKey);

    this.http.get(this.url, { params: params })
      .subscribe(response => this.result = response);
  }

  sidebarItems = [
    { link: '/', label: 'Dashboard', icon: 'dashboard' },
    {
      label: 'Candidat', icon: 'apps', subItem: [
        { link: '/dash/candidats', label: 'Liste des candidats', icon: 'lc' },
      ]
    },
    {
      label: 'Etudiant', icon: 'ballot', subItem: [
        { link: '/dash/etudiants', label: 'Liste des etudiants', icon: 'le' },
      ]
    },
    {
      label: 'Professeur', icon: 'pages', subItem: [
        { link: '/dash/professeurs', label: 'Liste des professeurs', icon: 'lp' },
      ]
    },
    {
      label: 'Sites', icon: 'grid_on', subItem: [
        { link: '/components/buttons', label: 'Home', icon: 'h' },
        { link: '/components/buttons', label: 'About', icon: 'a' },
      ]
    },

  ];

}
