import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { ProductListComponent } from "./product-list.component";
import { ProductListService } from "./product-list.service";

describe("ProductListComponent", () => {
  let productService: ProductListService;
  let fixture: ComponentFixture<ProductListComponent>;
  let component: ProductListComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductListService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.get(ProductListService);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it("should create product service", () => {
    expect(productService).toBeTruthy();
  });

  it("should test filter product list (async)", async(() => {
    component.searchText = "fresh";
    let productSpy = spyOn(
      productService,
      "filterProductList"
    ).withArgs('fresh').and.callThrough();

    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const value = debugElement.query(By.css("#product_0")).nativeElement
          .innerText;
        expect(value).toContain(component.searchText);
      });
    });
  }));
});
