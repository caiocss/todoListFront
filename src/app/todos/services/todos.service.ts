import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/Shared/Interface/itodo';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }  

  getTodos(username: string = ""): Observable<ITodo[]> {
    console.log("Username dentro de service = " + username)
    if (!username) {
      return this.http.get<ITodo[]>("https://localhost:44359/api/todos/");
    }

    return this.http.get<ITodo[]>(`https://localhost:44359/api/todos/${username}`);    
  }

  insertTodo(todo: ITodo) {
    console.log(todo);
    return this.http.post("https://localhost:44359/api/todos/", todo, {headers: headers});
  }

  deleteTodo(id: string) {
    return this.http.delete(`https://localhost:44359/api/todos/${id}`);
  }

  updateTodo(id: string, todo: ITodo) {
    return this.http.put(`https://localhost:44359/api/todos/${id}`, todo, {headers: headers});
  }
}
