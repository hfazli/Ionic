import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class AppSearchbarComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchTerm: string = ''; // Menambahkan properti searchTerm

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.searchChange.emit(this.searchTerm);
  }
}
