import { ICategory } from './icategory';

export interface IProduct {
  id: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  Category: ICategory;
  Discription : string;
}