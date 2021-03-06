import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioLogado: boolean = false;
  loginEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  realizarLogin(usuario: Usuario) {

    if (usuario.user === 'user@email.com' && usuario.password === '123') {

      this.usuarioLogado = true;
      this.loginEmmiter.emit(true);
      this.router.navigate(['']);

    } else {

      this.usuarioLogado = false;
    }
  }

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }
}
