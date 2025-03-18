import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { UrlService } from '../../service/url.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-product',
  standalone: false,
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {

  Products: any;
  categoryId: any;
  constructor(private service: UrlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.service.getProducts().subscribe((data) => {
      this.Products = data;
    })

  }
}
