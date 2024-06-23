import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string = '';
  private profileImage: string = ''; // Inisialisasi dengan string kosong
  private joinedDate: string = '';

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  getUserProfileImage(): string {
    return this.profileImage; // Gunakan profileImage langsung
  }

  setJoinedDate(date: string) {
    this.joinedDate = date;
  }

  getJoinedDate(): string {
    return this.joinedDate;
  }
}
