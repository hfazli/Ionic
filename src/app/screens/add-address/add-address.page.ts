import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AddressService, Address } from 'src/app/services/address.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addressForm: FormGroup;
  provinces: string[] = [];
  cities: any = {};
  selectedCities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private actionSheetController: ActionSheetController,
    private http: HttpClient,
    private addressService: AddressService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.addressForm = this.fb.group({
      addressName: [''],
      receiverName: [''],
      phoneNumber: [''],
      province: [''],
      city: [''],
      districts: [''],
      village: [''],
      address: [''],
      addressNotes: [''],
    });
  }

  ngOnInit() {
    this.loadProvinces();
    this.loadCities();
  }

  loadProvinces() {
    this.http.get<any[]>('assets/provinces.json').subscribe((data) => {
      this.provinces = data.map((province) => province.name);
    });
  }

  loadCities() {
    this.http.get<any>('assets/cities.json').subscribe((data) => {
      this.cities = data;
    });
  }

  async openProvinceActionSheet() {
    const buttons = this.provinces.map((province) => ({
      text: province,
      handler: () => {
        this.addressForm.patchValue({ province: province });
        this.selectedCities = this.cities[province] || [];
        this.addressForm.patchValue({ city: '' }); // Reset city field
      },
    }));

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Province',
      buttons: [...buttons, { icon: 'close', text: 'Cancel', role: 'cancel' }],
    });

    await actionSheet.present();
  }

  async openCityActionSheet() {
    const buttons = this.selectedCities.map((city) => ({
      text: city,
      handler: () => {
        this.addressForm.patchValue({ city: city });
      },
    }));

    const actionSheet = await this.actionSheetController.create({
      header: 'Select City',
      buttons: [...buttons, { icon: 'close', text: 'Cancel', role: 'cancel' }],
    });

    await actionSheet.present();
  }

  async saveAddress() {
    const address: Address = {
      name: this.addressForm.value.addressName,
      receiver: this.addressForm.value.receiverName,
      phone: this.addressForm.value.phoneNumber,
      fullAddress: `${this.addressForm.value.address}, ${this.addressForm.value.village}, ${this.addressForm.value.districts}, ${this.addressForm.value.city}, ${this.addressForm.value.province}`,
    };

    this.addressService.addAddress(address);

    const toast = await this.toastController.create({
      message: 'Address added successfully',
      duration: 2000, // Durasi tampilan toast dalam milidetik
      position: 'bottom', // Posisi toast
    });
    toast.present();

    this.addressForm.reset(); // Reset the form after saving the address
    this.selectedCities = []; // Reset the selected cities

    this.router.navigate(['/address']);
  }

  onSubmit() {
    console.log(this.addressForm.value);
    this.saveAddress();
  }
}
