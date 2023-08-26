import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';
import { ProductsFromServerService } from 'src/app/Services/products-from-server.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute , private router:Router , 
  private location:Location, private productsFromServer:ProductsFromServerService) { }
  ngOnInit(): void {
    // this.pID = (this.activatedRoute.snapshot.paramMap.get('pID')) ? Number(this.activatedRoute.snapshot.paramMap.get('pID')) : 0;
    // this.product = this.productService.getProductByID(this.pID);
    this.productsFromServer.getAllProductIds().subscribe(ids => {
      this.pIDs = ids;
    });
    // console.log(this.pIDs);
    

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.pID= (paramMap.get('pID'))?Number(paramMap.get('pID')) : 0;
      // let p = this.productService.getProductByID(this.pID);
      // if(p){
      //   this.product = p;
      // }else{
      //   alert("NOP");
      //   this.location.back();
      // }
      this.productsFromServer.getProductByID(this.pID).subscribe(
        data =>{
          this.product = data;
          console.log(this.product);
        }
      )
    })
  }
  product: IProduct | undefined;
  pID: number = 0;
  pIDs: number[] = [];
  currentPIDIndex: number = 0;

  prevProduct() {
    this.currentPIDIndex = this.pIDs.indexOf(this.pID);
    console.log(this.currentPIDIndex);
    this.router.navigate(['/productDetails/' + this.pIDs[--this.currentPIDIndex]])
  }
  nextProduct() {
    this.currentPIDIndex = this.pIDs.indexOf(this.pID);
    this.router.navigate(['/productDetails/' + this.pIDs[++this.currentPIDIndex]])
  }
}
