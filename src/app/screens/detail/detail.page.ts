import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoes } from 'src/app/models/shoe.model';
import { ShoeService } from 'src/app/services/shoe.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service'; // Import WishlistService
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  shoe: Shoes | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService,
    private cartService: CartService,
    private wishlistService: WishlistService, // Inject WishlistService
    private toastCtrl: ToastController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const id = idParam !== null ? +idParam : null;

    if (id !== null) {
      this.shoe = this.shoeService.getShoe(id);

      if (!this.shoe) {
        // Tangani jika sepatu dengan ID yang diberikan tidak ditemukan
        console.error('Shoe not found with id:', id);
      }
    } else {
      // Tangani jika ID tidak valid
      console.error('Invalid shoe id:', idParam);
    }
  }

  // Metode untuk menambah item ke keranjang
  async addItemToCart() {
    // Pastikan this.shoe tidak undefined sebelum mengakses propertinya
    if (this.shoe) {
      const cartItem: CartItem = {
        id: this.shoe.id || 0, // Menggunakan nilai default jika this.shoe.id undefined
        name: this.shoe.title || '', // Menggunakan nilai default jika this.shoe.title undefined
        price: this.shoe.price || 0, // Menggunakan nilai default jika this.shoe.price undefined
        productId: this.shoe.id,
        image: this.shoe.image || '', // Menggunakan nilai default jika this.shoe.image undefined
        quantity: 1,
      };

      // Simpan cartItem ke dalam keranjang belanja menggunakan CartService
      this.cartService.addToCart(cartItem);

      // Tampilkan toast untuk memberi tahu pengguna bahwa sepatu telah ditambahkan ke keranjang
      await this.presentToast('Shoes added to the cart');

      // Setelah menambahkan ke keranjang, navigasikan pengguna ke halaman cart
      this.router.navigate(['/cart']);
    } else {
      console.error('this.shoe is undefined.');
      // Handle case where this.shoe is undefined
    }
  }

  async addToWishlist() {
    if (this.shoe) {
      this.wishlistService.addToWishlist(this.shoe);
      await this.presentToast('Shoes added to the wishlist');
      this.router.navigate(['/wishlist']); // Navigate to wishlist page
    } else {
      console.error('this.shoe is undefined.');
      // Handle case where this.shoe is undefined
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Size',
      buttons: [
        {
          text: '38',
          handler: () => {
            console.log('Selected 38');
          },
        },
        {
          text: '39',
          handler: () => {
            console.log('Selected 39');
          },
        },
        {
          text: '40',
          handler: () => {
            console.log('Selected 40');
          },
        },
        {
          text: '41',
          handler: () => {
            console.log('Selected 41');
          },
        },
        {
          text: '42',
          handler: () => {
            console.log('Selected 42');
          },
        },
        {
          text: '43',
          handler: () => {
            console.log('Selected 43');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
