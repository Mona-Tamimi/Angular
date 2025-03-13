import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public users: User[] = []; // ✅ Define users array
  public user: User | null = null; // ✅ Define single user

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getUserById(1); // Example: Fetch user with ID 1
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (result) => {
        this.users = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      (result) => {
        this.user = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'api13mar2025.client';
}
