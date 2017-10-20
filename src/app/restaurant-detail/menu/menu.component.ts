import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "app/restaurants/restaurants.service";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  menus: Observable<MenuItem>
  
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menus = this.restaurantsService.menuOfRestaurants(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(event: MenuItem)
  {
    console.log(event)
  }


}
