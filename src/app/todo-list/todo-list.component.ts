import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  toDosArray: { title: string; id: number }[] = [];

  toDoItem: string = '';

  submitToDo() {
    const newToDo = { title: this.toDoItem, id: this.toDosArray.length + 1 };
    this.toDosArray.push(newToDo);
  }
}
