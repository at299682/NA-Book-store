import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  author: string;
  specifications: string[];
  bundling: string[];
  isbn?: string;
  pages?: number;
  language?: string;
  publisher?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: '1929',
      price: 499,
      image: '/products/1929.webp',
      description: 'A historical novel set in 1929, exploring the economic turmoil and human stories of the Great Depression era.',
      author: 'Historical Fiction Author',
      specifications: ['Hardcover', '320 pages', 'ISBN: 978-1-234567-89-0', 'Published: 2023', 'Language: English'],
      bundling: ['Free bookmark included', 'Digital companion guide', 'Exclusive author interview access'],
      isbn: '978-1-234567-89-0',
      pages: 320,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 2,
      name: 'Chaotic',
      price: 599,
      image: '/products/Chaotic.webp',
      description: 'A thrilling chaotic adventure that takes readers on a wild journey through unexpected twists and turns.',
      author: 'Adventure Writer',
      specifications: ['Paperback', '280 pages', 'ISBN: 978-1-234567-90-6', 'Published: 2023', 'Language: English'],
      bundling: ['Character art print', 'Behind-the-scenes notes', 'Exclusive merchandise discount'],
      isbn: '978-1-234567-90-6',
      pages: 280,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 3,
      name: 'Dream Golf Courses',
      price: 699,
      image: '/products/DreamGolfCourses.webp',
      description: 'Explore the world\'s most spectacular golf courses in this beautifully illustrated guide to golfing paradise.',
      author: 'Golf Enthusiast',
      specifications: ['Hardcover with dust jacket', '200 pages', 'ISBN: 978-1-234567-91-3', 'Published: 2024', 'Language: English'],
      bundling: ['Golf course locator map', 'Practice tips booklet', 'Professional photography collection'],
      isbn: '978-1-234567-91-3',
      pages: 200,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 4,
      name: 'How To Test Negative For Stupid',
      price: 399,
      image: '/products/HowToTestNegativeForStupid.webp',
      description: 'A humorous yet insightful guide to critical thinking and avoiding common pitfalls in decision-making.',
      author: 'Psychology Expert',
      specifications: ['Paperback', '150 pages', 'ISBN: 978-1-234567-92-0', 'Published: 2023', 'Language: English'],
      bundling: ['Self-assessment quiz cards', 'Discussion guide', 'Online community access'],
      isbn: '978-1-234567-92-0',
      pages: 150,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 5,
      name: 'Learn A Lot While You Sit On Pot',
      price: 299,
      image: '/products/LearnALotWhileUSitOnPot.jpg',
      description: 'Educational content designed for short reading sessions, perfect for busy lifestyles.',
      author: 'Educational Author',
      specifications: ['Paperback', '120 pages', 'ISBN: 978-1-234567-93-7', 'Published: 2023', 'Language: English'],
      bundling: ['Quick reference cards', 'Mobile app companion', 'Progress tracker'],
      isbn: '978-1-234567-93-7',
      pages: 120,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 6,
      name: 'Murdle Volume 1',
      price: 799,
      image: '/products/MurdleVolum1.webp',
      description: 'The first volume of the critically acclaimed Murdle mystery series, filled with puzzles and intrigue.',
      author: 'Mystery Writer',
      specifications: ['Hardcover', '400 pages', 'ISBN: 978-1-234567-94-4', 'Published: 2024', 'Language: English'],
      bundling: ['Puzzle solutions booklet', 'Character profiles', 'Series roadmap'],
      isbn: '978-1-234567-94-4',
      pages: 400,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 7,
      name: 'Remarkable Golf Courses',
      price: 649,
      image: '/products/RemarkableGolfCourses.webp',
      description: 'A comprehensive guide to remarkable golf courses that have shaped the sport\'s history.',
      author: 'Sports Historian',
      specifications: ['Hardcover', '250 pages', 'ISBN: 978-1-234567-95-1', 'Published: 2024', 'Language: English'],
      bundling: ['Historical timeline poster', 'Course rating system guide', 'Expert commentary audio'],
      isbn: '978-1-234567-95-1',
      pages: 250,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 8,
      name: 'The Confident Mind',
      price: 549,
      image: '/products/TheConfidentMind.jpg',
      description: 'Build unshakeable confidence and mental resilience with proven psychological techniques.',
      author: 'Mindfulness Expert',
      specifications: ['Paperback', '180 pages', 'ISBN: 978-1-234567-96-8', 'Published: 2023', 'Language: English'],
      bundling: ['Meditation audio tracks', 'Confidence exercises workbook', 'Online support group'],
      isbn: '978-1-234567-96-8',
      pages: 180,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 9,
      name: 'The Correspondent',
      price: 449,
      image: '/products/TheCorrespondent.jpg',
      description: 'A gripping tale of a war correspondent navigating danger and moral dilemmas in conflict zones.',
      author: 'Journalism Novelist',
      specifications: ['Paperback', '300 pages', 'ISBN: 978-1-234567-97-5', 'Published: 2023', 'Language: English'],
      bundling: ['Author Q&A session access', 'Discussion questions', 'Reading group guide'],
      isbn: '978-1-234567-97-5',
      pages: 300,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 10,
      name: 'The Let Them Theory',
      price: 349,
      image: '/products/theLETTHEMthoery.jpg',
      description: 'Understanding the psychology of letting go and finding peace in acceptance.',
      author: 'Philosophy Writer',
      specifications: ['Paperback', '140 pages', 'ISBN: 978-1-234567-98-2', 'Published: 2023', 'Language: English'],
      bundling: ['Reflection journal prompts', 'Guided meditation', 'Community forum access'],
      isbn: '978-1-234567-98-2',
      pages: 140,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 11,
      name: 'The Match',
      price: 599,
      image: '/products/TheMatch.webp',
      description: 'An intense sports drama about a championship match that changes lives forever.',
      author: 'Sports Fiction Author',
      specifications: ['Hardcover', '350 pages', 'ISBN: 978-1-234567-99-9', 'Published: 2024', 'Language: English'],
      bundling: ['Behind-the-scenes documentary', 'Player interviews', 'Game strategy analysis'],
      isbn: '978-1-234567-99-9',
      pages: 350,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 12,
      name: 'The Mental Game',
      price: 499,
      image: '/products/TheMentalGame.jpg',
      description: 'Master the mental aspects of performance in sports, business, and life.',
      author: 'Performance Coach',
      specifications: ['Paperback', '220 pages', 'ISBN: 978-1-234568-00-2', 'Published: 2023', 'Language: English'],
      bundling: ['Performance assessment tools', 'Mental training exercises', 'Coach consultation'],
      isbn: '978-1-234568-00-2',
      pages: 220,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 13,
      name: 'The Mental Toughness Handbook',
      price: 699,
      image: '/products/TheMentalToughnessHandbook.webp',
      description: 'A comprehensive guide to developing mental toughness for peak performance.',
      author: 'Psychology Researcher',
      specifications: ['Hardcover', '280 pages', 'ISBN: 978-1-234568-01-9', 'Published: 2024', 'Language: English'],
      bundling: ['Assessment questionnaires', 'Training program templates', 'Expert webinars'],
      isbn: '978-1-234568-01-9',
      pages: 280,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 14,
      name: 'The Miracles Among Us',
      price: 399,
      image: '/products/TheMiraclesAmongUs.webp',
      description: 'Inspiring true stories of miracles and extraordinary events that defy explanation.',
      author: 'Inspirational Writer',
      specifications: ['Paperback', '160 pages', 'ISBN: 978-1-234568-02-6', 'Published: 2023', 'Language: English'],
      bundling: ['Personal reflection guide', 'Inspiration cards', 'Community stories'],
      isbn: '978-1-234568-02-6',
      pages: 160,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 15,
      name: 'Theo Of Golden',
      price: 749,
      image: '/products/TheoOfGolden.webp',
      description: 'The epic tale of Theo, a legendary figure whose golden touch changed the world.',
      author: 'Fantasy Author',
      specifications: ['Hardcover', '450 pages', 'ISBN: 978-1-234568-03-3', 'Published: 2024', 'Language: English'],
      bundling: ['Character artwork collection', 'World map poster', 'Exclusive short stories'],
      isbn: '978-1-234568-03-3',
      pages: 450,
      language: 'English',
      publisher: 'NA Books'
    },
    {
      id: 16,
      name: 'The Secret Of Secrets',
      price: 649,
      image: '/products/TheSecretOfSecrets.webp',
      description: 'Unlock the ancient wisdom and hidden knowledge passed down through generations.',
      author: 'Esoteric Scholar',
      specifications: ['Hardcover', '320 pages', 'ISBN: 978-1-234568-04-0', 'Published: 2024', 'Language: English'],
      bundling: ['Ancient wisdom cards', 'Meditation practices', 'Secret society access'],
      isbn: '978-1-234568-04-0',
      pages: 320,
      language: 'English',
      publisher: 'NA Books'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value.filter(item => item.product.id !== productId);
    this.cartItems.next(currentItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItems.next([...currentItems]);
      }
    }
  }

  getTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  clearCart() {
    this.cartItems.next([]);
  }
}