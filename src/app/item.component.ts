import { 
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, 
} from '@angular/core';

@Component({
  selector: 'item',
  template: `
    <div [class.light]="light">
      <span>{{data?.name}}</span>
      <button (click)="onChangeItem.emit()">Change</button>
      <button (click)="onDeleteItem.emit()">Delete</button>
      {{updatingViewBindings}}
    </div>
  `,
  styles:[`
    div { background-color: #888; padding: 0.5em }
    div.light { background-color: #666; }
    span { color: lightgrey }
    button { margin-left: 0.5em }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush

  // <button (click)="handleChangeItem()">Change</button>
  // <button (click)="handleDeleteItem()">Delete</button>
})
export class ItemComponent  {

  @Input() data = null;
  @Input() light;
  @Output() onChangeItem = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();

  get updateViewBindings() {
    console.log(`updatingViewBindings(${this.data.id})`);
  }

  ngOnChanges(changes) {
    console.log(`ngOnChanges(${this.data.id})`);
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log(`ngOnChanges state: ${propName}: now = ${cur}, before = ${prev}`);
    // }
  }

  ngDoCheck() {
    console.log(`ngDoCheck()`);   
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked()`);   
  }

  handleChangeItem() {
    // this.data.name += ' CHANGED';
    this.onChangeItem.emit();
  }
}
