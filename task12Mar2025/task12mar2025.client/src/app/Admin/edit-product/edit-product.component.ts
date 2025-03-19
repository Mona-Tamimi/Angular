import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {


  productContainer: any
  ngOnInit() {
    let product = this._active.snapshot.paramMap.get("id");
    this._url.getProductById(product).subscribe((data) => {

      this.productContainer = data
    })


  }
  Id: any
  constructor(private _url: UrlService, private _active: ActivatedRoute) {

  }
  updateProduct(data: any) {
    this.Id = this._active.snapshot.paramMap.get("id");
    this._url.updateProduct(this.Id, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}
