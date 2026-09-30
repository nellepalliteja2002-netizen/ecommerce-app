import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  searchText = '';

  selectedSection = '';

  products = [
    {
      id: 1,
      name: 'Sindhura',
      price: 1200,
      qty: 0,
      description: 'Sweet, Juicy & Fibreless'
    },
    {
      id: 2,
      name: 'Alphonso',
      price: 1400,
      qty: 0,
      description: 'Rich Aroma & Naturally Sweet'
    },
    {
      id: 3,
      name: 'Banganapalli',
      price: 1000,
      qty: 0,
      description: 'Traditionally Famous & Delicious'
    }
  ];

  cart: any[] = [];

  total = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // ======================
  // PRODUCT FUNCTIONS
  // ======================

  increaseQty(product: any) {
    product.qty++;
  }

  decreaseQty(product: any) {

    if (product.qty > 0) {
      product.qty--;
    }

  }
addToCart(product: any) {

  if (product.qty <= 0) {
    alert('Please select quantity');
    return;
  }

  const existing = this.cart.find(
    item => item.id === product.id
  );

  if (existing) {

    existing.qty = product.qty;

  } else {

    this.cart.push({
      ...product
    });

  }

  this.calculateTotal();

}

  removeItem(item: any) {

  this.cart = this.cart.filter(
    x => x.id !== item.id
  );

  this.calculateTotal();

}
  calculateTotal() {

    this.total = this.cart.reduce(
      (sum, item) =>
        sum + (item.price * item.qty),
      0
    );

  }

  getFilteredProducts() {

    return this.products.filter(product =>

      product.name
        .toLowerCase()
        .includes(
          this.searchText.toLowerCase()
        )

    );

  }

  // ======================
  // NAVIGATION BUTTONS
  // ======================

  goHome() {

  this.selectedSection = '';

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

  viewMangoes() {

  const section = document.querySelector('.products');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

  howItWorks() {

  const section = document.querySelector('.bottom-features');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }

}

myOrders() {

  const section =
    document.getElementById('myOrdersSection');

  if (section) {

    section.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
aboutUs() {

  const section =
    document.getElementById(
      'aboutUsSection'
    );

  if (section) {

    section.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
contactUs() {

  const section =
    document.getElementById(
      'contactSection'
    );

  if (section) {

    section.scrollIntoView({
      behavior: 'smooth'
    });

  }

}

  login() {

  this.router.navigate(['/admin-login']);

}

  // ======================
  // HERO SECTION
  // ======================

  shopMangoes() {

    const section =
      document.querySelector('.products');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }

  }

  // ======================
  // CHECKOUT
  // ======================

  checkout() {

    if (this.cart.length === 0) {

      alert('Cart is empty');
      return;

    }

    alert(
      'Proceeding to checkout. Total Amount: ₹' +
      (this.total + 100)
    );

  }

}