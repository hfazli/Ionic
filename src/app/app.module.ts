import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ShoesCardModule } from './components/shoes-card/shoes-card.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { WishlistService } from './services/wishlist.service';
import { TitleCasePipe } from '@angular/common';
import { ShoeService } from './services/shoe.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LoginPageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WishlistService,
    TitleCasePipe,
    ShoeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
