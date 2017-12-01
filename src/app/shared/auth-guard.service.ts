import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  canActivate() {
    console.log(this.cookieService.get("chave"));
    return true;
    //return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

  constructor( public cookieService: CookieService ) {
    this.cookieService.set("chave", "valor")
  }

}