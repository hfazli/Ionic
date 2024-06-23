import { Injectable } from '@angular/core';

export interface Address {
  name: string;
  receiver: string;
  phone: number;
  fullAddress: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private addresses: Address[] = [];

  constructor() {}

  addAddress(address: Address) {
    this.addresses.push(address);
  }

  getAddresses(): Address[] {
    return this.addresses;
  }

  deleteAddress(address: Address) {
    const index = this.addresses.indexOf(address);
    if (index > -1) {
      this.addresses.splice(index, 1);
    }
  }
}
