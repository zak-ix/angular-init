import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = signal(0)

  increment() {
    this.counterValue.update(val => val + 1)
  }

  reset() {
    this.counterValue.set(0)
  }
  decrement() {
    this.counterValue.update(val => val - 1)
  }
}
