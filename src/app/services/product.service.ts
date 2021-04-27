import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus sem quam, id suscipit neque.', 100),
    new Product(2, 'Product 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisi lacus. Morbi.', 150)
  ]

  constructor() { }

  getProducts(): Product[]{
      //TODO: Populate products from API and return an Observable
    return this.products
  }
}
