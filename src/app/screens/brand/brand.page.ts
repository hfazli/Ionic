import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoes } from 'src/app/models/shoe.model';
import { ShoeService } from 'src/app/services/shoe.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  brand: string = '';
  brandImage: string = '';
  shoes: Shoes[] = [];

  constructor(
    private shoeService: ShoeService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const brandParam = this.route.snapshot.paramMap.get('brand');
    this.brand = brandParam ? brandParam : '';

    const brandImages: { [key: string]: string } = {
      nike: 'assets/images/nike-product.jpg',
      adidas: 'assets/images/adidas-product.jpg',
      puma: 'assets/images/puma-product.jpg',
      all: 'assets/images/default-product.jpg',
    };

    this.brandImage =
      brandImages[this.brand.toLowerCase()] ||
      'assets/images/default-product.jpg';
    this.shoes = this.shoeService
      .getShoesList()
      .filter((shoe) => shoe.brand.toLowerCase() === this.brand.toLowerCase());
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }

  async presentDescriptionActionSheet() {
    let headerText = '';
    let descriptionText = '';

    switch (this.brand.toLowerCase()) {
      case 'nike':
        headerText = 'Deskripsi Produk Nike';
        descriptionText =
          'Nike adalah perusahaan multinasional asal Amerika Serikat yang terkenal di seluruh dunia sebagai salah satu merek terkemuka dalam industri pakaian olahraga dan peralatan atletik. Didirikan pada tahun 1964 oleh Bill Bowerman dan Phil Knight, Nike telah tumbuh menjadi salah satu merek paling ikonik dalam sejarah olahraga.';
        break;
      case 'adidas':
        headerText = 'Deskripsi Produk Adidas';
        descriptionText =
          'Adidas adalah perusahaan pakaian dan aksesoris olahraga multinasional asal Jerman yang didirikan pada tahun 1949 oleh Adolf Dassler. Adidas terkenal dengan produk-produknya seperti sepatu, pakaian, dan aksesoris olahraga.';
        break;
      case 'puma':
        headerText = 'Deskripsi Produk Puma';
        descriptionText =
          'Puma adalah perusahaan pakaian dan sepatu olahraga yang didirikan pada tahun 1948 oleh Rudolf Dassler di Jerman. Puma terkenal dengan sepatu, pakaian, dan aksesoris olahraga dengan desain yang inovatif dan fungsional.';
        break;
      default:
        headerText = 'Deskripsi Produk';
        descriptionText = 'Deskripsi produk tidak tersedia.';
        break;
    }

    const actionSheet = await this.actionSheetController.create({
      header: headerText,
      buttons: [
        {
          text: descriptionText,
          icon: 'information-circle',
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
