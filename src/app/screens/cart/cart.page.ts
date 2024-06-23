import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>; // Tambahkan inisialisasi sederhana

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount(); // Inisialisasi properti totalAmount$
  }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    // this.totalAmount$ sudah diinisialisasi di constructor
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) {
      this.removeFromCart(item);
    } else {
      this.cartService.changeQty(-1, item.id);
    }
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Hapus',
      message: 'Apakah anda yakin ingin menghapusnya?',
      buttons: [
        {
          text: 'Ya',
          handler: () => this.cartService.removeFromCart(item),
        },
        {
          text: 'Tidak',
        },
      ],
    });

    await alert.present();
  }
}
