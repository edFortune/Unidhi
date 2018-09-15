import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Etudiant } from '../../Models/etudiant.model';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {

  etudiantCollection: AngularFirestoreCollection<Etudiant>;
  etudiants: Observable<Etudiant[]>;
  source: LocalDataSource;
  doubleClick = 0;

  data = [];
  settings = {
    actions: false,
    columns: {
      nom: {
        title: 'Nom',
        filter: false
      },
      nomUsage: {
        title: "Nom d'usage",
        filter: false
      },
      prenom: {
        title: 'Prénom',
        filter: false
      },
      carteId: {
        title: 'ID',
        filter: false
      }
    }
  };

  constructor(private afs: AngularFirestore, private router: Router) {
    this.source = new LocalDataSource(this.data); // create the source
  }

  ngOnInit() {
    this.etudiantCollection = this.afs.collection('etudiant');
    this.etudiantCollection.snapshotChanges().forEach(data => {
      let can = [];
      data.forEach(current => {
        let data = current.payload.doc.data();
        data.docId = current.payload.doc.id;
        can.push(data);
      });
      this.data = can;
      this.source.load(this.data);
      console.log(this.data);
    });

  }

  onRowSelect(data: Object) {
    let etudiant = <Etudiant>data;
    this.doubleClick += 1;
    if (this.doubleClick >= 2) {
      let id = etudiant.docId;
      console.log(id);
      this.router.navigate(["/dash/etudiants/" + id]);
      this.doubleClick = 1;
    }


  }


}
