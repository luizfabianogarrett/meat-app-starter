import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.restaurantService.restaurantById(this.route.snapshot.params['id']).subscribe(r => this.restaurant = r);
    this.restaurant = this.restaurantService.restaurantById2()
  }

}
