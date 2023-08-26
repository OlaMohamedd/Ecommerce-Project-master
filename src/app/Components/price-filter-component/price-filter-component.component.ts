import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-price-filter-component',
  templateUrl: './price-filter-component.component.html',
  styleUrls: ['./price-filter-component.component.scss']
})
export class PriceFilterComponentComponent {
  minPriceParent: number = 0;
  maxPriceParent: number = 0;
  isFilterApplied: boolean = false;

  filterProductsByPrice(minPrice: number, maxPrice: number): void {
    this.minPriceParent = minPrice;
    this.maxPriceParent = maxPrice;
    this.isFilterApplied = true;
  }
  cart: any[] = [];

  // getProductCount(product: IProduct): number {
  //   let count = 0;
  //   for (let item of this.cart) {
  //     if (item.ID === product.ID && count < item.Quantity) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  
  // getTotalPrice(product: IProduct): number {
  //   let count = this.getProductCount(product);
  //   return product.Price * count;
  // }

  removeFromCart(item: any): void {
    const index = this.cart.findIndex(cartItem => cartItem.AddedProduct.id === item.AddedProduct.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      const product = item.AddedProduct;
      product.Quantity += item.Quantity;
    }
  }
  
  NeededQuantity = 0 ;
  
  handleNeededQuantityChange(quantity: number) {
    this.NeededQuantity = quantity;
  }
  FunctionProductInCartEvent(AddedProduct: IProduct) {
    const existingCartItem = this.cart.find(item => item.AddedProduct.id === AddedProduct.id);
  
    if (existingCartItem) {
      existingCartItem.Quantity += this.NeededQuantity;
    } else {
      this.cart.push({ AddedProduct, Quantity: this.NeededQuantity });
    }
    this.NeededQuantity = 0;
  }
  
}
