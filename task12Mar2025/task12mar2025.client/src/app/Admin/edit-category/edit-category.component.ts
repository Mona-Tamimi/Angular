import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {


  categoryContainer: any
  ngOnInit() {
    let category = this._active.snapshot.paramMap.get("id");
    this._url.getCategoryByCategoryId(category).subscribe((data) => {

      this.categoryContainer = data
    })


  }
  categoryId: any
  constructor(private _url: UrlService, private _active: ActivatedRoute) {

  }
  updateCategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._url.updateCategory(this.categoryId, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}
