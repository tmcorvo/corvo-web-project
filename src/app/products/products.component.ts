import { Component } from '@angular/core';
import { Product } from '../objects/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is product 1'
    },
    {
      name: 'Product 2',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is product 2'
    },
    // Add more products as needed
 ];
}
