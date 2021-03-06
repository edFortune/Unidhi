import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Etudiant } from '../../Models/etudiant.model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-etudiant-new',
  templateUrl: './etudiant-new.component.html',
  styleUrls: ['./etudiant-new.component.scss']
})
export class EtudiantNewComponent implements OnInit {
  etudiantRef: AngularFirestoreCollection<Etudiant>;
  etudiant: Etudiant;
  etudiantInputs = [];
  title: string = "Nouveau etudiant";
  editEtudiant: boolean = false;
  userId: string;

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private router: Router) {
    this.etudiantRef = this.afs.collection<Etudiant>('etudiant');
    this.etudiant = new Etudiant();
  }
  ngOnInit() {

    this.etudiantInputs = [
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

      this.etudiantRef.doc(this.userId).valueChanges().forEach(ele => {
        if (!ele) {
          this.title = "Nouveau etudiant";
          this.editEtudiant = false;
          return;
        }

        this.etudiant = <Etudiant>ele;

        this.title = "Modifier un etudiant";
        this.editEtudiant = true;
      });

    });

  }

  save() {
    if (!this.etudiant.nom || !this.etudiant.prenom || !this.etudiant.nomUsage)
      return;

    let etudiant = JSON.parse(JSON.stringify(this.etudiant));

    if (this.editEtudiant) {
      this.etudiantRef.doc(this.userId).update(etudiant).then(() => {
        this.router.navigate(["/dash/etudiants"]);
      });
    } else {
      this.etudiantRef.add(etudiant).then(() => {
        this.router.navigate(["/dash/etudiants"]);
      });
    }
  }

  back() {
    this.router.navigate(["/dash/etudiants"]);
  }

}
