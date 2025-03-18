import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private _ser: UrlService) { }

  ngOnInit() { }

  addCategory(data: any) {
    this._ser.addCategory(data).subscribe(() => {
      alert("added")

    })
  }
}
