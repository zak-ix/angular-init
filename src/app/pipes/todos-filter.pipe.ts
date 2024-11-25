import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'todosFilter',
  standalone: true
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos
    }
    return todos.filter((todo) => todo.title.includes(searchTerm))
  }

}
