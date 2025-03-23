import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sun23-3',
  standalone: false,
  templateUrl: './sun23-3.component.html',
  styleUrl: './sun23-3.component.css'
})
export class Sun233Component {

// Creating a BehaviorSubject with an initial value
 mySubject = new BehaviorSubject<string>('Initial Value');

// Subscribing to the BehaviorSubject
  ngOnInit() {


    this.mySubject.subscribe(value => {
      console.log('Subscriber 1:', value);
    });

    // Emitting new values
    this.mySubject.next('New Value 1');
    this.mySubject.next('New Value 2');

    // New subscriber joins later
    this.mySubject.subscribe(value => {
      console.log('Subscriber 2:', value);
    });

  }
}
