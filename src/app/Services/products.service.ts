import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { ProductsFromServerService } from './products-from-server.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductList: IProduct[];
  filteredProducts: IProduct[];
  FilterCategory: IProduct[] = [];

  constructor(private productApiService: ProductsFromServerService) {
    this.ProductList = [
      // {
      //   id: 1,
      //   Name: "T-shirt",
      //   Quantity: 100,
      //   Price: 250,
      //   Img: "https://static.zarahome.net/8/photos4/2023/V/4/1/p/6133/579/481/6133579481_1_1_1.jpg?t=1671018781999",
      //   Category: {
      //     ID: 33340,
      //     Name: "T-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 2,
      //   Name: "Shirt",
      //   Quantity: 30,
      //   Price: 450,
      //   Img: "https://static.zara.net/photos///2023/V/0/2/p/6987/450/800/2/w/1920/6987450800_6_1_1.jpg?ts=1673887066880",
      //   Category: {
      //     ID: 33340,
      //     Name: "T-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."

      // },
      // {
      //   id: 3,
      //   Name: "B-shirt",
      //   Quantity: 200,
      //   Price: 225,
      //   Img: "https://static.zara.net/photos///2023/I/0/2/p/4231/425/811/2/w/560/4231425811_6_1_1.jpg?ts=1689085939253",
      //   Category: {
      //     ID: 33340,
      //     Name: "T-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 4,
      //   Name: "A-pants",
      //   Quantity: 0,
      //   Price: 25,
      //   Img: "https://static.zara.net/photos///2023/V/0/1/p/1165/130/800/2/w/404/1165130800_6_1_1.jpg?ts=1675960027319",
      //   Category: {
      //     ID: 33340,
      //     Name: "T-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 5,
      //   Name: "E-pants",
      //   Quantity: 540,
      //   Price: 15,
      //   Img: "https://static.zara.net/photos///2023/V/0/1/p/5039/737/720/2/w/560/5039737720_6_1_1.jpg?ts=1671548568516",
      //   Category: {
      //     ID: 33341,
      //     Name: "B-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 6,
      //   Name: "F-shirt",
      //   Quantity: 0,
      //   Price: 250,
      //   Img: "https://static.zarahome.net/8/photos4/2023/V/4/1/p/6133/579/481/6133579481_1_1_1.jpg?t=1671018781999",
      //   Category: {
      //     ID: 33341,
      //     Name: "B-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 7,
      //   Name: "G-Shirt",
      //   Quantity: 30,
      //   Price: 450,
      //   Img: "https://static.zara.net/photos///2023/V/0/2/p/6987/450/800/2/w/1920/6987450800_6_1_1.jpg?ts=1673887066880",
      //   Category: {
      //     ID: 33342,
      //     Name: "C-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 8,
      //   Name: "H-shirt",
      //   Quantity: 200,
      //   Price: 225,
      //   Img: "https://static.zara.net/photos///2023/I/0/2/p/4231/425/811/2/w/560/4231425811_6_1_1.jpg?ts=1689085939253",
      //   Category: {
      //     ID: 33342,
      //     Name: "C-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 9,
      //   Name: "Z-pants",
      //   Quantity: 300,
      //   Price: 25,
      //   Img: "https://static.zara.net/photos///2023/V/0/1/p/1165/130/800/2/w/404/1165130800_6_1_1.jpg?ts=1675960027319",
      //   Category: {
      //     ID: 33342,
      //     Name: "C-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // },
      // {
      //   id: 10,
      //   Name: "Q-pants",
      //   Quantity: 540,
      //   Price: 15,
      //   Img: "https://static.zara.net/photos///2023/V/0/1/p/5039/737/720/2/w/560/5039737720_6_1_1.jpg?ts=1671548568516",
      //   Category: {
      //     ID: 33342,
      //     Name: "C-Clothes"
      //   },
      //   Discription: "Pellentesque a nulla rhoncus, porttitor neque sit amet, auctor tortor. Aliquam semper rutrum convallis. Phasellus odio lectus, congue in facilisis eu, iaculis dictum lorem. Vestibulum nunc neque, consequat et ex quis, porttitor sodales ex. Aliquam imperdiet lacus in felis condimentum faucibus. Nulla a convallis leo, vitae bibendum ante. Donec egestas non est eu tempor. Donec tincidunt orci non felis accumsan, eu blandit orci commodo. Vivamus id varius orci. Morbi vitae nunc semper, pretium sem non, auctor orci. Sed at accumsan purus. Fusce egestas porta lorem, a euismod ante consectetur at. Phasellus semper eu enim id laoreet."
      // }
    ];
    this.filteredProducts = this.ProductList;
  }
  // getAllProducts(): IProduct[] {
  //   return this.ProductList;
  // }
  // getProductByID(pID: number): IProduct | undefined {
  //   return this.ProductList.find(pid => pid.id == pID);
  // }
  // filterProductsByCategory(Categoryid: number): IProduct[] {
  //   if (Categoryid == 0) {
  //     console.log(Categoryid + "if");

  //     return this.ProductList;
  //   } else {
  //     console.log(Categoryid + "else");
  //     return this.ProductList.filter(product => product.Category.ID == Categoryid);

  //   }
  // }

  filterProductsByCategory(CategoryID: number): Observable<IProduct[]> {
    if (CategoryID == 0) {

      return this.productApiService.getAllProducts().pipe(
        map(products => products.filter(p => p.Category.ID))
      );
    } else {
      return this.productApiService.getAllProducts().pipe(
        map(products => products.filter(p => p.Category.ID === CategoryID))
      );
    }
  }
  // filterProductsByPrice(minPrice: number, maxPrice: number): IProduct[] {
  //   if (minPrice && maxPrice) {
  //     return this.FilterCategory = this.ProductList.filter(product => product.Price >= minPrice && product.Price <= maxPrice);
  //   } else if (minPrice) {
  //     return this.FilterCategory = this.ProductList.filter(product => product.Price >= minPrice);
  //   } else if (maxPrice) {
  //     return this.FilterCategory = this.ProductList.filter(product => product.Price <= maxPrice);
  //   } else {
  //     return this.FilterCategory = this.ProductList;
  //   }
  // }

  filterProductsByPrice(minPrice: number, maxPrice: number): Observable<IProduct[]> {
    return this.productApiService.getAllProducts().pipe(
      map(products => products.filter(p => p.Price >= minPrice && p.Price <= maxPrice))
    );
  }

  getProductIds(): number[] {
    return this.ProductList.map(pid => pid.id) 
  }
}
