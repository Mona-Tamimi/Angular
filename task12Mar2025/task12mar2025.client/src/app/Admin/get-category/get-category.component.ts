import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-get-category',
  standalone: false,
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {

  Categories: any;
  constructor(private service: UrlService) { }

  ngOnInit() {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.service.getCategory().subscribe((data) => {
      this.Categories = data;
    })
  }
}
