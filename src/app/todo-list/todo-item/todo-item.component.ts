import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) toDoItem: string = '';
  @Input({ required: true }) status: string = '';
  @Output() toDoDelete = new EventEmitter<void>();
  @Output() toDoComplete = new EventEmitter<void>();

  deleteToDo() {
    this.toDoDelete.emit();
  }

  completeToDo() {
    this.toDoComplete.emit();
  }
}
