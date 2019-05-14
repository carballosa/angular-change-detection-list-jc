import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <button (click)="handleChange1stItem()">Change 1st</button>
      <button (click)="handleDelete1stItem()">Delete 1st</button>
      <button (click)="handleAddItem()">Add one</button>
      <button (click)="0">CD</button>
      <item *ngFor="let data of dataSet; let odd=odd" 
        [data]="data" [light]="odd"
        (onChangeItem)="handleChange(data)"
        (onDeleteItem)="handleDelete(data)"
      ></item>
    </div>
  `,  
  styles: [`
    div { padding: 0.5em; background-color: #ccc }
    button { margin-right: 0.5em; margin-bottom: 0.5em }
  `],  
})
export class AppComponent { 

  dataSet: any = [
    {id: 1, name: 'math'},
    {id: 2, name: 'spanish'},
    {id: 3, name: 'physics'},
    {id: 4, name: 'music'}
  ];

  handleChange1stItem() {
    this.handleChange(this.dataSet[0]);
  }

  handleDelete1stItem() {
    this.handleDelete(this.dataSet[0]);
  }

  handleAddItem() {
    const nextId = this.dataSet[this.dataSet.length-1].id+1;
    this.dataSet.push({ id: nextId, name: 'new Item' }); // mutable
    // this.dataSet = this.dataSet.concat({ id: nextId, name: 'new Item' }); // immutable
  }
  
  handleChange(data) {;
    this.dataSet[this.dataSet.indexOf(data)].name += ' CHANGED'; // mutable
    // this.dataSet = this.dataSet.map(d => d !== data ? d : { ...d, name: d.name + ' CHANGED' } );// immutable
  }
 
  handleDelete(data) {
    this.dataSet.splice(this.dataSet.indexOf(data), 1); // mutable
    // this.dataSet = this.dataSet.filter(d => d !== data); // immutable
  }
}
