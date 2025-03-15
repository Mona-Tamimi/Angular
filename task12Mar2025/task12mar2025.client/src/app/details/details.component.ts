import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: SerService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProductById(productId);
    }
  }

  fetchProductById(id: string) {
    this.apiService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
        console.log('Product Details:', this.product);
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
