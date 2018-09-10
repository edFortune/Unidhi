import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Candidat } from '../../Models/candidat.model';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {
  candidatRef: AngularFirestoreCollection<Candidat>;
  candidat: Candidat;
  candidatInputs = [];

  constructor(private afs: AngularFirestore) {
    this.candidatRef = this.afs.collection<Candidat>('candidat');
    this.candidat = new Candidat();
  }

  ngOnInit() {

    this.candidatInputs = [
      { label: "Nom", props: 'nom', type: 'text' },
      { label: "Nom d'usage", props: 'nomUsage', type: 'text' },
      { label: "Prénom", props: 'prenom', type: 'text' }
    ];

  }

  save() {

    console.log(this.candidat);

    this.candidatRef.add(JSON.parse(JSON.stringify(this.candidat))).then(() => {
      console.log("Added");
    });
  }

}
