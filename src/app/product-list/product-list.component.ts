import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public searchText: string;
  tempProductList: any[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService.getProductList().subscribe(data => {
      this.tempProductList = data;
      });
    }

  getProductList() {

  }

  filterProductList(event) {
    let val = this.searchText;
    this.productListService.filterProductList(val)
    .then((data) => {
      this.tempProductList = data;
    });
  }

  getFilterCount() {}
}
