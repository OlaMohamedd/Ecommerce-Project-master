import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsFromServerService } from 'src/app/Services/products-from-server.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private addNewProduct: ProductsFromServerService, private router: Router, private route: ActivatedRoute) { }

  // addProduct() {
  //   let product: IProduct = {
  //     id: 11,
  //     Name: 'ZZZ-Shirt',
  //     Quantity: 555,
  //     Price: 250,
  //     Img: 'https://static.zara.net/photos///2023/V/0/2/p/6987/450/800/2/w/1920/6987450800_6_1_1.jpg?ts=1673887066880',
  //     Category: {
  //       ID: 33340,
  //       Name: "T-Clothes"
  //     },
  //     Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
  //   }
  //   this.addNewProduct.addNewProduct(product).subscribe({
  //     next:(product) =>{
  //       console.log(product);
  //     },
  //     error:(error) =>{
  //       console.log(error);

  //     }
  //   })
  // }
  // product: IProduct = {} as IProduct;
  product: IProduct = {
    id: 0,
    Name: '',
    Quantity: 0,
    Price: 0,
    Img: '',
    Category: {
      ID: 0,
      Name: ''
    },
    Discription: ''
  };



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      if (productId) {
        this.addNewProduct.getProductByID(productId).subscribe(
          product => {
            this.product = product;
          },
          error => {
            console.error(error);
          }
        );
      } else {
        this.product = {
          id: 0,
          Name: '',
          Quantity: 0,
          Price: 0,
          Img: '',
          Category: { ID: 0, Name: '' },
          Discription: ''
        };
      }
    });
  }

  addOrUpdateProduct() {
    if (this.product.id === 0) {
      // Adding a new product
      this.addNewProduct.addNewProduct(this.product).subscribe({
        next: (product) => {
          // console.log(product);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      // If the product ID exists, update the product
      this.addNewProduct.updateProduct(this.product).subscribe(
        (updatedProduct) => {
          // console.log('Product updated:', updatedProduct);
          this.router.navigate(['/home']);
        },
        (updateError) => {
          alert("No Product with that ID .. New Product will be added with the given ID");
          this.addNewProduct.addNewProduct(this.product).subscribe(
            (newProduct) => {
              alert(`'New product added:', ${newProduct.Name}`)
              this.router.navigate(['/home']);
            },
            (addError) => {
              console.error('Failed to add new product:', addError);
            }
          );
        }
      );
    }
  }


}
