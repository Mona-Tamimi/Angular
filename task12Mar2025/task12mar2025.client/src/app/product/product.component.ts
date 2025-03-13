import { Component } from '@angular/core';
import { SerService } from '../ser.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  products: any[] = [];
  categoryId: any;
  constructor(private _service: SerService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._service.getProducts(this.categoryId).subscribe((data) => {

      this.products = data.filter((p: any) => p.categoryID == this.categoryId)
    })
  }
}
