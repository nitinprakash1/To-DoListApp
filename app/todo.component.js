System.register(['angular2/core', './todo.http.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_http_service_1, http_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_http_service_1_1) {
                todo_http_service_1 = todo_http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(todoService) {
                    var _this = this;
                    this.todoService = todoService;
                    this.title = "Todo Component";
                    todoService.getToDos().subscribe(function (res) {
                        _this.todoItems = JSON.parse(res._body);
                        console.log(_this.todoItems);
                    });
                }
                TodoComponent.prototype.getToDobyId = function () {
                    var _this = this;
                    var id = this.searchedId;
                    this.todoService.getById(id).subscribe(function (res) {
                        _this.todo = JSON.parse(res._body);
                        console.log(_this.todo);
                    });
                };
                TodoComponent.prototype.saveToDo = function () {
                    var todoObj = {
                        userId: this.todo.userId,
                        id: this.todo.id,
                        title: this.todo.title,
                        completed: this.todo.completed,
                    };
                    this.todoService.save(todoObj).subscribe(function (todo) {
                        console.log(JSON.parse(todo._body));
                    });
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-comp',
                        templateUrl: 'app/todo.tpl.html',
                        providers: [todo_http_service_1.ToDoService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [todo_http_service_1.ToDoService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map