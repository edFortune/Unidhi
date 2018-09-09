import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';


@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  candidatCollection: AngularFirestoreCollection<Candidat>;
  candidats: Observable<Candidat[]>;

  selected = [];
  rows = [];
  columns = []
  temp = [];

  constructor(private afs: AngularFirestore) {
    this.temp = this.rows;
  }

  ngOnInit() {

    this.candidatCollection = this.afs.collection('candidat');

    this.candidatCollection.snapshotChanges().forEach(data => {
      let can = [];
      data.forEach(current => {
        let data = current.payload.doc.data();
        can.push(data);
      });
      this.rows = can;
      this.temp = can;
    });

  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (d.nom.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.prenom.toLowerCase().indexOf(val) !== -1 || !val);
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
