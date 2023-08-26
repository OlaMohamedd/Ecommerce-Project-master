import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsFromServerService } from 'src/app/Services/products-from-server.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  ClientName: string = "Ola";
  selectedCategory: ICategory | undefined;
  store: Store = new Store("HandeMade", ["Nasr City", "New Cairo", "Haram"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU0w50wOP52c1fuEv19WlsoNxD5Tu3wAlecexnmss1TVcsXFoPH3aush49KTnJ_MqrRA&usqp=CAU");
  @Input() CategoryID: number = 0;
  FilterCategory: IProduct[] = [];
  constructor(public productService: ProductsService, private router: Router, public productApiService: ProductsFromServerService ,public authService: AuthService) {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['isFilterApplied'] && changes['isFilterApplied'].currentValue) {
      // this.FilterCategory = this.productService.filterProductsByPrice(this.minPrice, this.maxPrice);
      this.productService.filterProductsByPrice(this.minPrice, this.maxPrice).subscribe(data => {
        this.FilterCategory = data;
      });
    } else {
      // this.FilterCategory = this.productService.filterProductsByCategory(this.CategoryID);
      // this.productApiService.getAllProducts().subscribe(data =>{this.FilterCategory=data})
      this.productService.filterProductsByCategory(this.CategoryID).subscribe(data => {
        this.FilterCategory = data;
        // console.log(this.FilterCategory);
      });
    }

    this.neededQuantityChange.emit(this.neededQuantity);
    if (changes['neededQuantity']) {
      const newValue = changes['neededQuantity'].currentValue;
    }
  }
  Discount: DiscountOffers = DiscountOffers.NoDiscount;

  isPurchased: boolean = false;
  isPurchasedItemId: number = 0;

  @Output() productInCartEvent = new EventEmitter<IProduct>();

  togglePurchase(item: IProduct, itemNo: number) {
    if (this.isPurchasedItemId != item.id) {
      this.isPurchasedItemId = item.id;
    }
  
    if (!itemNo || isNaN(itemNo)) {
      itemNo = 1;
    }
  
    if (item.Quantity >= itemNo) {
      item.Quantity -= itemNo;
    } else {
      alert("Not enough quantity available.");
      return;
    }
  
    this.neededQuantity = itemNo;
    this.neededQuantityChange.emit(this.neededQuantity);
    this.productInCartEvent.emit(item);
  }
  

  ngOnInit(): void {
  }
  @Input() minPrice: number = 0;
  @Input() maxPrice: number = 0;
  @Input() isFilterApplied: boolean = false;


  neededQuantity: number = 1;
  @Output() neededQuantityChange = new EventEmitter<number>();


  goToProductDetails(pID: number) {
    this.router.navigate(['/productDetails/' + pID]);
  }

  deleteProduct(productId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        this.productApiService.deleteProduct(productId).subscribe(
            () => {
                // Filter out the deleted product from the list
                this.FilterCategory = this.FilterCategory.filter(item => item.id !== productId);
            },
            error => {
                console.error(error);
            }
        );
    }
}

}