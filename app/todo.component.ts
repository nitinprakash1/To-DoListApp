import {Component} from 'angular2/core';
import {ToDoService} from './todo.http.service';
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http';

@Component({
    selector: 'todo-comp',
    templateUrl: 'app/todo.tpl.html',
    providers: [ToDoService, HTTP_PROVIDERS]
})
export class TodoComponent {
    title: string;
    todoItems: Response;
    todo: Response;

    constructor(public todoService: ToDoService) {
        this.title = "Todo Component";
        todoService.getToDos().subscribe((res) => {
            this.todoItems = JSON.parse(res._body);
            console.log(this.todoItems);
        });
    }
    getToDobyId() {
        var id = this.searchedId;
        this.todoService.getById(id).subscribe((res) => {
            this.todo = JSON.parse(res._body);
            console.log(this.todo);
        });
    }

    saveToDo() {
        var todoObj = {
            userId: this.todo.userId,
            id: this.todo.id,
            title: this.todo.title,
            completed: this.todo.completed,
        };

        this.todoService.save(todoObj).subscribe((todo) => {
            console.log(JSON.parse(todo._body));
        });
    }

}