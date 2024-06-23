import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage {
  addresses: any[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private addressService: AddressService
  ) {}

  ionViewWillEnter() {
    this.addresses = this.addressService.getAddresses();
  }

  async deleteAddress(address: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this address?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.addressService.deleteAddress(address);
            this.addresses = this.addressService.getAddresses(); // Update the list after deletion
          },
        },
      ],
    });

    await alert.present();
  }

  goToAddAddress() {
    this.router.navigate(['/add-address']);
  }

  selectAddress(address: any) {
    this.router.navigate(['/checkout'], {
      state: { selectedAddress: address },
    });
  }
}
