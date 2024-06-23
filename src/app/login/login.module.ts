// login.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module'; // Import LoginPageRoutingModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule, // Tambahkan LoginPageRoutingModule di sini
  ],
  declarations: [LoginPage], // Deklarasikan LoginPage di sini
})
export class LoginPageModule {}
