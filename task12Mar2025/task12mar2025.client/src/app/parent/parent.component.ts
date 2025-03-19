import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  receivedMessage: string = ''; // Variable to store received data from child

  // Step 3: Function to receive data from the child component
  receiveData(data: string) {
    this.receivedMessage = data; 
  }
}

