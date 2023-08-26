import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-category-filter-component',
  templateUrl: './category-filter-component.component.html',
  styleUrls: ['./category-filter-component.component.scss']
})
export class CategoryFilterComponentComponent {
  // selectedCategory: ICategory | undefined;
  // CategoryList: ICategory[] = [];
  CategoryIDParent:number = 0 ;
  CategoryList: ICategory [];
  constructor(){
    this.CategoryList = [
      {
        ID: 210,
        Name: "Women"
      },
      {
        ID: 211,
        Name: "Baby"
      },
      {
        ID: 212,
        Name: "Decor"
      },
    ];
  }
}
