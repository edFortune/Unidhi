import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, Subject, timer } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})

export class CandidatListComponent implements OnInit {
  candidatCollection: AngularFirestoreCollection<Candidat>;
  candidats: Observable<Candidat[]>;
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

    this.candidatCollection = this.afs.collection('candidat');

    this.candidatCollection.snapshotChanges().forEach(data => {
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
    let candidat = <Candidat>data;
    this.doubleClick += 1;
    if (this.doubleClick >= 2) {
      let id = candidat.docId;
      console.log(id);
      this.router.navigate(["/dash/candidats/" + id]);
      this.doubleClick = 1;
    }


  }

  onCreateConfirm(newData: Object) {
    console.log(newData);

  }

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'nom',
        search: query
      },
      {
        field: 'nomUsage',
        search: query
      },
      {
        field: 'prenom',
        search: query
      }
    ], false);

  }


}



