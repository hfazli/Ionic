import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  wishlist$ = this.wishlistService.getWishlist();

  constructor(
    private router: Router,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {}

  goToDetailPage(shoeId: number) {
    this.router.navigate(['/detail', shoeId]);
  }
}
