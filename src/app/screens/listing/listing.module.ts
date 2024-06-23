import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { ListingPage } from './listing.page';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { ShoesCardModule } from 'src/app/components/shoes-card/shoes-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    ShoesCardModule,
  ],
  declarations: [ListingPage],
})
export class ListingPageModule {}
