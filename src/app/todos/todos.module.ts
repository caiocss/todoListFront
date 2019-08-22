import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
