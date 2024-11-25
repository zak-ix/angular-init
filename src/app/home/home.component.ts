import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('hello world!');
  keyUpHandler (event: KeyboardEvent) {
    console.log(`Pressed ${event.key}`)
  }
}
