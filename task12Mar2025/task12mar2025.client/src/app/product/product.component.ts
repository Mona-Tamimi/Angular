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

  product: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: SerService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProductById(productId);
    }
  }

  fetchProductById(categoryId: string) {
    this.apiService.getProductsByCategory(categoryId).subscribe(
      (data) => {
        this.product = data || [];
        console.log('Products in Category:', this.product);
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.product = [];
      }
    );
  }

}
