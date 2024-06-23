import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string;
  profileImage: string = ''; // Inisialisasi dengan string kosong
  joinedDate: string = ''; // Inisialisasi dengan string kosong

  constructor(private userService: UserService, private router: Router) {
    this.userName = this.userService.getUserName();
  }

  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.profileImage =
      this.userService.getUserProfileImage() ||
      'assets/imgs/profile-placeholder.png';
    this.joinedDate = this.userService.getJoinedDate(); // Get joined date from UserService
  }

  navigateTo(page: string) {
    switch (page) {
      case 'order':
        this.router.navigate(['/order']);
        break;
      case 'notification':
        this.router.navigate(['/notification']);
        break;
      case 'settings':
        this.router.navigate(['/settings']);
        break;
      default:
        break;
    }
  }
}
