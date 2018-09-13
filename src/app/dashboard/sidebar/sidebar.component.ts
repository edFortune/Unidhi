import { Component } from '@angular/core';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public commonService: CommonService) { }

  sidebarItems = [
    { link: '/', label: 'Dashboard', icon: 'dashboard' },
    {
      label: 'Candidat', icon: 'apps', subItem: [
        { link: '/components/buttons', label: 'Liste des candidats', icon: 'lc' },
      ]
    },
    {
      label: 'Etudiant', icon: 'ballot', subItem: [
        { link: '/components/buttons', label: 'Liste des etudiants', icon: 'le' },
      ]
    },
    {
      label: 'Professeur', icon: 'pages', subItem: [
        { link: '/components/buttons', label: 'Liste des professeurs', icon: 'lp' },
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
