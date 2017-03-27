import {Component} from 'angular2/core';
import {TodoComponent} from './todo.component';

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html',
    directives:[TodoComponent]

})
export class AppComponent {
    title: string;
    header: string;

    constructor() {
        this.title = "HTTPServices";
        this.header = "";
    }


}