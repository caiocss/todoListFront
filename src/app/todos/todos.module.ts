import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [TodoListComponent, TodoComponent, InputTodoComponent, TodosComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
