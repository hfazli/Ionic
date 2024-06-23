import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { ProfilePage } from './user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
  ],
  declarations: [ProfilePage],
})
export class UserProfilePageModule {}
