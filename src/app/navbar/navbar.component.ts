import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {NotificacionSolic} from '../model/notificacionSolic';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  username: string;
  notificacion: NotificacionSolic[];
  cantidadNotif = 0;
  sexo;


  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private router: Router,
              private _serv: CorrespondenciaService) {
    config.placement = 'bottom-right';

  }
  ngOnInit() {
    let item = sessionStorage.getItem("app-login");
    let userLogin = JSON.parse(item);
    this.sexo = userLogin.persona.genero;
    this.username= userLogin.usuario.ausrFlname.charAt(0).toUpperCase()+userLogin.usuario.ausrFlname.substr(1).toLowerCase()+' '+userLogin.usuario.ausrSlname.charAt(0).toUpperCase()
      +userLogin.usuario.ausrSlname.substr(1).toLowerCase();

    setInterval(() => {
    //   this.callFuntionAtIntervals();
    // }, 1000);
    // setTimeout(() => {
      this._serv.obtieneSolicitudesPorVencer(userLogin.usuario.personId).subscribe(response0 => {
        this.notificacion = response0;
        this.cantidadNotif = this.notificacion.length > 0 ? this.notificacion.length : 0;
        console.log('Ejecutando...............');
      });

    }, 10000);


  }
  cerrarSession(){
    sessionStorage.clear();
    sessionStorage.removeItem('app-login');
    console.log('*****************CERRANDO SESSION*****************');
    let link = ['login/'];
    console.info(link);
    this.router.navigate(link);
  }

}
