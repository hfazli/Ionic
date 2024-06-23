import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<
    CartItem[]
  >([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();
  private selectedProductId: number | undefined;

  getCart(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  addToCart(item: CartItem): void {
    const items = this.cartItemsSubject.getValue();
    items.push(item);
    this.cartItemsSubject.next(items);
  }

  changeQty(quantity: number, id: number): void {
    const items = this.cartItemsSubject.getValue();
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index].quantity += quantity;
      if (items[index].quantity < 1) {
        items.splice(index, 1); // Remove item if quantity is less than 1
      }
      this.cartItemsSubject.next([...items]); // Spread operator to trigger change detection
    }
  }

  removeFromCart(item: CartItem): void {
    const items = this.cartItemsSubject
      .getValue()
      .filter((cartItem) => cartItem.id !== item.id);
    this.cartItemsSubject.next(items);
  }

  getTotalAmount(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) =>
        items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
  }

  selectProduct(id: number): void {
    this.selectedProductId = id;
  }

  getSelectedProductId(): number | undefined {
    return this.selectedProductId;
  }
}
