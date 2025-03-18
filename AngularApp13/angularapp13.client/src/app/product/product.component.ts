import { Component } from '@angular/core';
import { TestSerService } from '../aymanService/test-ser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  constructor(private _ser : TestSerService , private _active : ActivatedRoute) { } // inject to service 

  ngOnInit() {
    this.get()
  }

  categoryId: any;
  dataProduct :any

  get() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._ser.getProductsByCategoryId().subscribe((data) => {

      this.dataProduct = data.filter((x: any) => x.categoryId == this.categoryId)

      if (this.dataProduct.length == 0) {

      }

    })
  }
}

