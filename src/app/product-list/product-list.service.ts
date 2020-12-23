import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ProductListService {
  productList = PRODUCT_LIST;

  constructor() {}

  public getProductList() {
    return of(this.productList);
  }

  public filterProductList(searchString: string): Promise<any> {
    return of(
    this.productList.filter(
      product => product.title.toLowerCase().indexOf(searchString) > -1)
    ).toPromise();
  }
}

export const PRODUCT_LIST = [
  {
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    filename: "0.jpg",
    height: 600,
    width: 400,
    price: 8.99,
    rating: 4,
  },
];
