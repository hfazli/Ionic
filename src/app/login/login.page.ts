import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  hidePassword: boolean = true;
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private userService: UserService
  ) {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  async presentAlert(
    header: string,
    message: string,
    icon: string,
    cssClass: string
  ) {
    const alert = await this.alertController.create({
      header: header,
      message: `${message}`,
      buttons: ['OK'],
      cssClass: cssClass,
      animated: true,
      backdropDismiss: false,
    });

    await alert.present();
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        const userRole = response.user.role; // Pastikan role user diambil dari respons
        this.userService.setUserName(response.user.name); // Simpan nama user
        if (userRole === 'admin') {
          this.presentAlert(
            'Login Successful',
            'Welcome to the admin panel!',
            'checkmark-circle-outline',
            'custom-alert-success'
          );
          this.navCtrl.navigateForward('/admin'); // Redirect to admin page
        } else {
          this.presentAlert(
            'Login Successful',
            'Welcome to the app!',
            'checkmark-circle-outline',
            'custom-alert-success'
          );
          this.navCtrl.navigateForward('/listing'); // Redirect to listing page for user
        }
      },
      (error: any) => {
        console.log('Login failed', error);
        this.presentAlert(
          'Login Failed',
          'Invalid email or password. Please try again.',
          'alert-circle-outline',
          'custom-alert-failure'
        );
      }
    );
  }
}
