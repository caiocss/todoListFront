import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ITodo } from 'src/app/Shared/Interface/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todo: ITodo;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<string>();

  deleteItem(id: string) {
    this.deleteEvent.emit(id);
  }

  onChange(id: string, stat: boolean) {
    console.log("O Evento do id: " + id + " alterou: " + stat);
    this.updateEvent.emit(id);
  }
}
