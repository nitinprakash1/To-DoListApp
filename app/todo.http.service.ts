import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class ToDoService{

    httpRequest:Http;    
    constructor(httpObj: Http){
        this.httpRequest = httpObj;
    }

    getToDos(){
       return this.httpRequest.get("https://jsonplaceholder.typicode.com/todos"); 
    }
    getById(id){
        return this.httpRequest.get("https://jsonplaceholder.typicode.com/todos/"+id);
    }

    save(todo){
        return this.httpRequest.post("https://jsonplaceholder.typicode.com/todos",todo);
    }

}













