import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Candidat } from '../../Models/candidat.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {
  candidatRef: AngularFirestoreCollection<Candidat>;
  candidat: Candidat;
  candidatInputs = [];
  title: string = "Nouveau candidat";
  editCandidat: boolean = false;
  userId: string;

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private router: Router) {
    this.candidatRef = this.afs.collection<Candidat>('candidat');
    this.candidat = new Candidat();
  }

  ngOnInit() {

    this.candidatInputs = [
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
      this.candidatRef.doc(this.userId).valueChanges().forEach(ele => {
        if (!ele) {
          this.title = "Nouveau candidat";
          this.editCandidat = false;
          return;
        }

        this.candidat = <Candidat>ele;

        this.title = "Modifier un candidat";
        this.editCandidat = true;
      });

    });
  }

  save() {
    if (!this.candidat.nom || !this.candidat.prenom || !this.candidat.nomUsage)
      return;

    let candidat = JSON.parse(JSON.stringify(this.candidat));

    if (this.editCandidat) {
      this.candidatRef.doc(this.userId).update(candidat).then(() => {
        this.router.navigate(["/dash/candidats"]);
      });

    } else {
      this.candidatRef.add(candidat).then(() => {
        this.router.navigate(["/dash/candidats"]);
      });
    }

  }


}
