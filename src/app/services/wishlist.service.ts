import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shoes } from 'src/app/models/shoe.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistSubject = new BehaviorSubject<Shoes[]>([]);
  private wishlist: Shoes[] = [];

  getWishlist(): Observable<Shoes[]> {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(shoe: Shoes) {
    this.wishlist.push(shoe);
    this.wishlistSubject.next(this.wishlist);
  }
}
