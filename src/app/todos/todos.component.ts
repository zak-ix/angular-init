import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { TodosFilterPipe } from '../pipes/todos-filter.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, TodosFilterPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([])
  searchTerm = signal('')

  ngOnInit(): void {
    // this.todoItems.set(this.todoService.todoItems)
    this.todoService.getTodosFromApi().subscribe(todos => this.todoItems.set(todos))
  }

  updatetodoItem(todo: Todo) {
    this.todoItems.update(todos => {
      return todos.map((todoItem) => {
        if (todo.id === todoItem.id) {
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        return todoItem
      })
    })
  }
}
