import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  goToAddAddress() {
    this.navCtrl.navigateForward('/address');
  }
}
