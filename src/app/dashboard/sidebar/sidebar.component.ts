import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public commonService: CommonService) {
  }

  ngOnInit() {

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
