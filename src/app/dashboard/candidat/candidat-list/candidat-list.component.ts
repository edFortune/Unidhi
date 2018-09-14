import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  candidatCollection: AngularFirestoreCollection<Candidat>;
  candidats: Observable<Candidat[]>;

  selected: Array<Candidat> = [];
  rows = [];
  columns = []
  temp = [];

  dtOptions: DataTables.Settings = {};
  data = [];
  constructor(private afs: AngularFirestore, private router: Router) {
    this.temp = this.rows;
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

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  edit() {
    if (this.selected.length != 1)
      return;

    let candidat = this.selected[0];

    this.router.navigate(["/dash/candidats/" + candidat.docId]);

  }

  delete() {

    this.selected.forEach(doc => {
      this.candidatCollection.doc(doc.docId).delete();
    });

  }


}
