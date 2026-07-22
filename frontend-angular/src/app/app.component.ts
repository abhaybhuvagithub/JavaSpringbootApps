import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { Product, CartItem } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="app">
      <header>
        <h1>Abhay Store <span class="tag">Angular</span></h1>
        <form (ngSubmit)="load()">
          <input placeholder="Search products..." [(ngModel)]="search" name="search" />
          <button type="submit">Search</button>
        </form>
      </header>

      <div *ngIf="status" class="alert" [class.success]="status.type === 'success'"
           [class.error]="status.type === 'error'" (click)="status = null">
        {{ status.text }}
      </div>

      <main>
        <section>
          <p *ngIf="loading" class="muted">Loading products...</p>
          <p *ngIf="!loading && !products.length" class="muted">No products found.</p>
          <div class="grid" *ngIf="!loading">
            <div class="card" *ngFor="let p of products">
              <img [src]="p.imageUrl" [alt]="p.name" loading="lazy" />
              <div class="card-body">
                <span class="badge">{{ p.category }}</span>
                <h3>{{ p.name }}</h3>
                <p class="muted">{{ p.description }}</p>
                <div class="card-footer">
                  <strong>{{ p.price | currency }}</strong>
                  <button [disabled]="p.stock <= 0" (click)="addToCart(p)">
                    {{ p.stock > 0 ? 'Add to cart' : 'Out of stock' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside class="cart">
          <h2>Cart</h2>
          <p *ngIf="!cart.length" class="muted">Your cart is empty.</p>
          <div class="cart-row" *ngFor="let i of cart">
            <span>{{ i.name }}</span>
            <input type="number" min="1" [(ngModel)]="i.qty" name="qty-{{ i.id }}" />
            <span>{{ i.price * i.qty | currency }}</span>
            <button class="link" (click)="removeItem(i.id)">x</button>
          </div>
          <form *ngIf="cart.length" class="checkout" (ngSubmit)="checkout()">
            <div>Total: <strong>{{ total() | currency }}</strong></div>
            <input placeholder="Your name" [(ngModel)]="customerName" name="name" required />
            <input placeholder="Email" type="email" [(ngModel)]="customerEmail" name="email" required />
            <button type="submit" class="primary">Place order</button>
          </form>
        </aside>
      </main>

      <footer>
        <p class="muted">Spring Boot microservices · PostgreSQL · Angular · API Gateway :8080</p>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  cart: CartItem[] = [];
  search = '';
  customerName = '';
  customerEmail = '';
  loading = true;
  status: { type: 'success' | 'error'; text: string } | null = null;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.service.getProducts(this.search).subscribe({
      next: (p) => { this.products = p; this.loading = false; },
      error: (e) => { this.status = { type: 'error', text: e.message }; this.loading = false; }
    });
  }

  addToCart(p: Product): void {
    const existing = this.cart.find((i) => i.id === p.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({ id: p.id, name: p.name, price: Number(p.price), qty: 1 });
    }
  }

  removeItem(id: number): void {
    this.cart = this.cart.filter((i) => i.id !== id);
  }

  total(): number {
    return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  checkout(): void {
    const order = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      items: this.cart.map((i) => ({ productId: i.id, quantity: Number(i.qty) }))
    };
    this.service.placeOrder(order).subscribe({
      next: (o) => {
        this.status = { type: 'success', text: `Order #${o.id} placed! Total ${o.totalAmount}` };
        this.cart = [];
        this.load();
      },
      error: (e) => { this.status = { type: 'error', text: e.error?.message || e.message }; }
    });
  }
}
