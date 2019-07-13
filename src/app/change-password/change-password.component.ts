import { Component, OnInit } from '@angular/core';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ChangePass} from '../model/change-pass';
import {Router} from '@angular/router';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  data: any = {};
  dataUsuario: ChangePass;
  usuarioFinal;
  constructor(private _serv: CorrespondenciaService,
              private router: Router) {

  }

  ngOnInit() {
    this.dataUsuario = new ChangePass();
    // this.usuarioFinal = new Usuario();
  }

  cambiarClave() {
    if (this.dataUsuario.passwd !== this.dataUsuario.passwd1) {
        alert('La confirmacion de la clave de ser igual a la nueva clave.');
        return;
    }
    console.info('Tamanio:' + this.dataUsuario.passwd.length)
    if (this.dataUsuario.passwd.length < 6) {
      alert('La Clave debe ser igual o mayor de 6 caracteres.');
      return;
    }
    let item = sessionStorage.getItem('app-login');
    this.usuarioFinal = JSON.parse(item);
    console.info('datos de login' + JSON.stringify(this.usuarioFinal));
    this.dataUsuario.usrId = this.usuarioFinal.usuario.ausrId;
    console.info('Para el cambio de pass=' + JSON.stringify(this.dataUsuario));
    this._serv.cambioPassword(this.dataUsuario).subscribe(response => {
        alert('El cambio de contraseña resulto exitoso.')
        console.info('Respuesta' + JSON.stringify(response));
        let link = ['home/app-dashboard'];
        console.info(link);
        this.router.navigate(link);
    },
      error => {
        alert('El cambio de contraseña no puede ser procesado.');
      });


  }

}
