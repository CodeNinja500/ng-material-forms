import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });
  readonly categories$: Observable<string> = this._productService.getCategory();

  constructor(private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      category: productForm.get('category')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value,
      price: productForm.get('price')?.value,
      title: productForm.get('title')?.value
    }).subscribe();

  }
}
