import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-block-form',
  templateUrl: './block-form.component.html',
  styleUrls: ['./block-form.component.css']
})
export class BlockFormComponent implements OnInit {
  @Input() inputs: any[] = [];
  @Input() data: Object;
  @Input() title: string;


  JSObject: any = Object;
  templateModal: Object = Object;
  templateModalHolder: Object = Object;
  arrayTemplate: any[] = [];
  DateObject: string = new Date().toDateString();
  dataHolder: Object;

  constructor() { }

  ngOnInit() {

    this.dataHolder = JSON.parse(JSON.stringify(this.data));

    console.log(this.dataHolder);


  }

  clickToAdd(model: Object, array: any[]) {
    this.templateModal = model;
    this.arrayTemplate = array;
    this.templateModalHolder = JSON.parse(JSON.stringify(model));
  }

  addToArray(form: NgForm) {
    let newObj = Object.assign({}, this.templateModal);
    this.arrayTemplate.push(newObj);
    this.templateModal = new Object();
    form.resetForm();
  }

  transformData(obj: Object) {
    if (!obj)
      return;
    return JSON.stringify(obj);
  }

  removeObj(idx: number, array: any[]) {
    array.splice(idx, 1);
  }

  capitalWord(str: string): string {
    return str.replace(/\b\w/g, l => l.toUpperCase()).split(/(?=[A-Z])/).join(" ");
  }

  checkType(value: any): string {

    console.log(Date.parse(value));


    if (value instanceof Array)
      return 'list';

    if (value == '' && typeof value === 'string' || value instanceof String)
      return 'string';

    if (Date.parse(value) !== NaN)
      return 'date';

    return 'false';
  }

}
