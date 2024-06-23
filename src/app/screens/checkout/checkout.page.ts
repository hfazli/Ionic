import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ShoeService } from 'src/app/services/shoe.service';
import { Shoes } from 'src/app/models/shoe.model';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  selectedShoe: Shoes | undefined;
  cartItems$: Observable<CartItem[]>; // Inisialisasi di constructor
  totalPrice$: Observable<number>; // Inisialisasi di constructor
  subTotalPrice: number = 0; // Menambahkan variabel subTotalPrice
  selectedAddress: any;

  constructor(
    private actionSheetController: ActionSheetController,
    private shoeService: ShoeService,
    private cartService: CartService,
    private navCtrl: NavController,
    private router: Router
  ) {
    // Inisialisasi di constructor
    this.cartItems$ = this.cartService.getCart();
    this.totalPrice$ = this.cartService.getTotalAmount();

    // Hitung sub total saat konstruktor dijalankan
    this.totalPrice$.subscribe((total) => {
      this.subTotalPrice = total;
    });

    // Cek apakah ada alamat yang diteruskan dari halaman address
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedAddress = navigation.extras.state['selectedAddress'];
    }
  }

  ngOnInit() {
    this.cartItems$.subscribe((cartItems) => {
      if (cartItems.length > 0) {
        const firstCartItem = cartItems[0]; // Mengambil produk pertama dari keranjang
        this.selectedShoe = this.shoeService.getShoe(firstCartItem.productId);
      }
    });
  }

  async presentShippingOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Shipper',
      buttons: [
        {
          text: 'J&T Regular',
          handler: () => {
            console.log('J&T Regular selected');
            // Anda bisa menambahkan logika tambahan di sini
          },
        },
        {
          text: 'Ninja Express',
          handler: () => {
            console.log('Ninja Express selected');
            // Anda bisa menambahkan logika tambahan di sini
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  goToCart() {
    this.navCtrl.navigateBack('/cart');
  }

  handleChangeClick() {
    this.navCtrl.navigateBack('/address');
  }

  selectProduct(id: number) {
    this.cartService.selectProduct(id);
    this.selectedShoe = this.shoeService.getShoe(id);
  }

  getCartItemQuantity(productId: number): number {
    let quantity = 0;
    this.cartItems$.subscribe((cartItems) => {
      const foundItem = cartItems.find((item) => item.productId === productId);
      if (foundItem) {
        quantity = foundItem.quantity;
      }
    });
    return quantity;
  }
}
