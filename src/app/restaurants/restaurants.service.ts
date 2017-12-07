import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Errorhandler } from './../app.error-handler';
import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";

import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantsService {
    
    rest: Restaurant
    
   
    init() {
      
        return new Promise((resolve, reject) => {
            this.http
                .get(`${MEAT_API}/restaurants/bread-bakery`)
                .map(res => res.json())
                .subscribe(response => {
                    this.rest = response;
                    resolve(true);
                })
        })

        
    }

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(Errorhandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(Errorhandler.handleError)
    }
    
    restaurantById2(): Restaurant{
        console.log(this.rest)
        
        return this.rest
    }

    load(): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/bread-bakery`).map(response => response.json()).catch(Errorhandler.handleError)
    }

    reviewsOfRestaurants(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json()).catch(Errorhandler.handleError)
    }

    menuOfRestaurants(id: string): Observable<MenuItem>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(Errorhandler.handleError)
    }


}