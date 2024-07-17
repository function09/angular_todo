import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';
import ToDo from '../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  toDosArray: ToDo[] = [];

  toDoItem: string = '';
  status: string = '';

  submitToDo() {
    const newToDo: ToDo = {
      title: this.toDoItem,
      id: this.toDosArray.length + 1,
      complete: 'Incomplete',
    };
    this.toDosArray.push(newToDo);
  }

  deleteToDo(id: number) {
    this.toDosArray = this.toDosArray.filter((todo) => todo.id !== id);
  }

  handleComplete(id: number) {
    const selectedToDo = this.toDosArray.find((todo) => todo.id === id);

    if (selectedToDo?.complete === 'Incomplete') {
      selectedToDo.complete = 'Complete';
    } else if (selectedToDo?.complete === 'Complete') {
      selectedToDo.complete = 'Incomplete';
    }
  }
}
