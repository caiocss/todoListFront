import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Shared/Interface/itodo';
import { TodosService } from '../Services/todos.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodosService, private authService: AuthService) { }

  ngOnInit() {
    this.getTodos();
  }

  reloadItens(todo: ITodo) {
    console.log("reload: " + todo)
    this.getTodos();
  }

  deleteItem(id: string) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
      console.log("Todo Removido com sucesso!");
    })
  }

  updateItem(id: string) {
    let todo: ITodo = this.todoList$.find(item => item.id == id);
    todo.done = !todo.done ? true : false;
    console.log(todo);
    this.todoService.updateTodo(id, todo).subscribe(() => {
      console.log("Item atualizado!");
    })
  }

  getTodos() {
    this.authService.currentUser.subscribe(userLogged => {
      console.log("Qual o usuário logado? = " + userLogged);
      if (userLogged) {
        this.todoService.getTodos(userLogged).subscribe(todos => {
          this.todoList$ = todos;
        });
      }
    })
  }
  
  todoList$: ITodo[] = [];
}
