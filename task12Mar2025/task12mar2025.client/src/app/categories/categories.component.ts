import { Component } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {


  categories: any[] = [];
  constructor(private _service: SerService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._service.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
