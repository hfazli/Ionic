import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  gender: string = ''; // Pastikan properti ini ada
  hidePassword: boolean = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private toastController: ToastController,
    private userService: UserService
  ) {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  async onSignup() {
    const signupData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      gender: this.gender,
    };

    this.authService.signup(signupData).subscribe(
      async (response: any) => {
        const toast = await this.toastController.create({
          message: 'Signup successful!',
          duration: 2000,
          color: 'success',
        });
        await toast.present();
        // this.userService.setUserName(this.name); // Set user name in UserService
        // this.userService.setJoinedDate(signupData.joinedDate); // Set joined date in UserService
        this.navCtrl.navigateForward('/login');
      },
      async (error: any) => {
        const toast = await this.toastController.create({
          message: 'Signup failed. Please try again.',
          duration: 2000,
          color: 'danger',
        });
        await toast.present();
      }
    );
  }
}
