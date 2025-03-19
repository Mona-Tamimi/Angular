import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // Step 1: Declare an EventEmitter
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();

  // Step 2: Function to emit data
  sendData() {
    this.dataEmitter.emit('Hello from Child!');
  }
}
