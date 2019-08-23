import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppGuard } from '../app.guard';
import { AddMessageComponent } from './add-message/add-message.component';

const routes = [
  {path: 'todos', component: TodoListComponent, canActivate: [AppGuard], canLoad: [AppGuard]}
]

@NgModule({
  declarations: [TodoListComponent, TodoComponent, InputTodoComponent, TodosComponent, AddMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AppGuard],
  exports: [TodosComponent]
})
export class TodosModule { }
