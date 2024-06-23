import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShoesCardComponent } from './shoes-card.component';

@NgModule({
  declarations: [ShoesCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ShoesCardComponent],
})
export class ShoesCardModule {}
