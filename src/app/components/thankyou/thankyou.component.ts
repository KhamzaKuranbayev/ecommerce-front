import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  message: string;
  orderId: number;
  products: ProductResponseModel[] = [];
  cartTotal: number;


  constructor(private router: Router,
    private orderService: OrdersService) {

    const navigation = this.router.getCurrentNavigation();

    const state = navigation.extras.state as {
      message: string,
      products: ProductResponseModel[],
      orderId: number,
      total: number
    }

    this.message = state.message;
    this.products = state.products;
    this.cartTotal = state.total;
    this.orderId = state.orderId;

  }

  ngOnInit(): void {
  }

}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantityOrdered: number
}
