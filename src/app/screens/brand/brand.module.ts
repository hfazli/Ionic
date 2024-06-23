import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BrandPage } from './brand.page';
import { ShoesCardModule } from 'src/app/components/shoes-card/shoes-card.module';
import { TitleCasePipe } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';

const routes = [
  {
    path: '',
    component: BrandPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShoesCardModule,
  ],
  declarations: [BrandPage],
})
export class BrandPageModule {}
