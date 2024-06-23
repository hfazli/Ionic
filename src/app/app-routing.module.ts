import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'mainscreen',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./screens/listing/listing.module').then(
        (m) => m.ListingPageModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./screens/cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'mainscreen',
    loadChildren: () =>
      import('./mainscreen/mainscreen.module').then(
        (m) => m.MainscreenPageModule
      ),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./screens/wishlist/wishlist.module').then(
        (m) => m.WishlistPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'category/:brand',
    loadChildren: () =>
      import('./screens/brand/brand.module').then((m) => m.BrandPageModule),
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./screens/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./screens/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./screens/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./screens/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./screens/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
