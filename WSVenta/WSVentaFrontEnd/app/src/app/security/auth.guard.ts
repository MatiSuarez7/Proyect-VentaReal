import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiauthService } from '../services/apiauth.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private router: Router, private apiauthservice: ApiauthService){

  }
  // Protejo las rutas, si no se loguea, no entra a la pagina
  canActivate(route: ActivatedRouteSnapshot){
    const usuario = this.apiauthservice.usuarioData;
    if (usuario){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
