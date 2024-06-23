import { Injectable } from '@angular/core';
import { Shoes } from '../models/shoe.model';

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  private shoesList: Shoes[] = [
    {
      id: 1,
      title: 'Nike Air Force 1',
      price: 1.899,
      image: 'assets/images/nikeAirForce1.png',
      description:
        'The Nike Air Force 1 White is an iconic sneaker that has stood the test of time since its debut in 1982.',
      brand: 'Nike',
      popular: true,
    },
    {
      id: 2,
      title: 'Nike Dunk Low',
      price: 2.399,
      image: 'assets/images/nikeDunkLow.png',
      description:
        'The Nike Dunk Low Grey is a stylish and versatile sneaker that combines a classic design with modern comfort.',
      brand: 'Nike',
      popular: true,
    },
    {
      id: 3,
      title: 'Adidas Yeezy Boost 350',
      price: 2.699,
      image: 'assets/images/AdidasYeezyBoost.png',
      description:
        'The Adidas Yeezy Boost 350 is a highly sought-after sneaker that represents the collaboration between Adidas and rapper Kanye West',
      brand: 'Adidas',
    },
    {
      id: 4,
      title: 'Nike Dunk Low Retro',
      price: 1.549,
      image: 'assets/images/nike-dunk-low-retro.png',
      description:
        'The Nike Dunk Low Retro is a low-top version of the iconic Nike Dunk. It features the classic Dunk silhouette and appealing aesthetics, closely resembling its high-top counterpart.',
      brand: 'Nike',
    },
    {
      id: 5,
      title: 'Puma Thunder Spectra',
      price: 1.799,
      image: 'assets/images/pumaThunder.png',
      description:
        'The Puma Thunder Spectra is a standout sneaker that captures the essence of modern streetwear with its bold design and chunky silhouette.',
      brand: 'Puma',
      popular: true,
    },
    {
      id: 6,
      title: 'Nike Jordan 4 Retro',
      price: 1.399,
      image: 'assets/images/Jordan-4-retro.png',
      description:
        'The Nike Air Jordan 4 Retro is a classic sneaker that holds a special place in the history of basketball footwear.',
      brand: 'Nike',
    },
    {
      id: 7,
      title: 'Adidas Samba OG',
      price: 2.299,
      image: 'assets/images/samba-og.png',
      description:
        'The Adidas Samba OG is a classic sneaker that has stood the test of time, renowned for its timeless design and versatile functionality.',
      brand: 'Adidas',
      popular: true,
    },
    {
      id: 8,
      title: 'Nike Pegasus Running',
      price: 1.599,
      image: 'assets/images/Nike_pegasus.png',
      description:
        'The Nike Pegasus Running Shoes are designed for runners of all levels, offering a blend of comfort, durability, and style.',
      brand: 'Nike',
    },
  ];

  getShoesList(): Shoes[] {
    return this.shoesList;
  }

  getShoe(id: number): Shoes | undefined {
    return this.shoesList.find((shoe) => shoe.id === id);
  }

  searchShoes(searchTerm: string): Shoes[] {
    if (!searchTerm.trim()) {
      return this.shoesList;
    }
    return this.shoesList.filter(
      (shoe) =>
        shoe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shoe.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getPopularShoes(): Shoes[] {
    return this.shoesList.filter((shoe) => shoe.popular);
  }
}
