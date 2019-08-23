import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/Shared/Interface/itodo';
import { TodosService } from '../Services/todos.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {

  @Output() insertEvent = new EventEmitter<ITodo>();
  inputText: string = "";

  constructor(private todosService: TodosService, private authService: AuthService) { }

  ngOnInit() {

  }  

  addTask(taskName: string) {
    this.authService.currentUser.subscribe(user => {
      if (taskName.trim()) {
        let todo: ITodo = {
          id: "",
          name: taskName,
          userId: user,
          done: false
        }
    
        this.todosService.insertTodo(todo).subscribe(() => {
          console.log("Cadastrado com sucesso!");
          this.insertEvent.emit(todo);
          this.inputText = "";
        });
      }
      else
      {
        alert("Não é aceito campos em branco ou apenas com espaços...");
      }
    });



    
  }

  

}
