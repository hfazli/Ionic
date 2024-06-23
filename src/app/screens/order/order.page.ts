import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  selectedSegment: string = 'All';
  orders: any[] = [];

  constructor() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    // Load orders based on the selected segment
    this.loadOrders(this.selectedSegment);
  }

  loadOrders(segment: string) {
    // Logic to load orders based on the selected segment
    // For now, we'll simulate an empty order list
    this.orders = [];
  }
}
