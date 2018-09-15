import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Professeur } from '../../Models/professeur.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-professeur-new',
  templateUrl: './professeur-new.component.html',
  styleUrls: ['./professeur-new.component.scss']
})
export class ProfesseurNewComponent implements OnInit {
  professeurRef: AngularFirestoreCollection<Professeur>;
  professeur: Professeur;
  professeurInputs = [];
  title: string = "Nouveau professeur";
  editProfesseur: boolean = false;
  userId: string;

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private router: Router) {
    this.professeurRef = this.afs.collection<Professeur>('professeur');
    this.professeur = new Professeur();
  }

  ngOnInit() {

    this.professeurInputs = [
      { label: "Nom", props: 'nom', type: 'text' },
      { label: "Nom d'usage", props: 'nomUsage', type: 'text' },
      { label: "Prénom", props: 'prenom', type: 'text' },
      { label: "CIN/NIF", props: 'carteId', type: 'text' },
      { label: "Dernier diplome obtenu", props: 'diplome', type: 'text' },
      { label: "Date de naissance", props: 'dateNaissance', type: 'dateTime' },
      { label: "Commune", props: 'commune', type: 'text' },
      { label: "Adresse", props: 'adresse', type: 'text' },
      { label: "No téléphone fixe", props: 'telephoneFixe', type: 'text' },
      { label: "No Portable", props: 'portable', type: 'text' },
      { label: "E-mail", props: 'email', type: 'text' },
    ];

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      if (!this.userId)
        return;

      this.professeurRef.doc(this.userId).valueChanges().forEach(ele => {

        if (!ele) {
          this.title = "Nouveau professeur";
          this.editProfesseur = false;
          return;
        }

        this.professeur = <Professeur>ele;
        this.title = "Modifier un professeur";
        this.editProfesseur = true;

      });
    });

  }


  save() {
    if (!this.professeur.nom || !this.professeur.prenom || !this.professeur.nomUsage)
      return;

    let professeur = JSON.parse(JSON.stringify(this.professeur));

    if (this.editProfesseur) {
      this.professeurRef.doc(this.userId).update(professeur).then(() => {
        this.router.navigate(["/dash/professeurs"]);
      });
    } else {
      this.professeurRef.add(professeur).then(() => {
        this.router.navigate(["/dash/professeurs"]);
      });
    }
  }

  back() {
    this.router.navigate(["/dash/professeurs"]);
  }

}
