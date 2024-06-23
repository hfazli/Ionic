import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoesCardModule } from 'src/app/components/shoes-card/shoes-card.module';
import { IonicModule } from '@ionic/angular';

import { WishlistPageRoutingModule } from './wishlist-routing.module';

import { WishlistPage } from './wishlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlistPageRoutingModule,
    ShoesCardModule,
  ],
  declarations: [WishlistPage],
})
export class WishlistPageModule {}
