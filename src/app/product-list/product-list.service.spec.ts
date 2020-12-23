import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

describe('ProductListService', () => {

  beforeEach(() => TestBed.configureTestingModule({

  }));

  it('should be created', () => {
    const service: ProductListService = TestBed.get(ProductListService);
    expect(service).toBeTruthy();
  });



});
