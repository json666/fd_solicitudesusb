import {Component, OnInit} from '@angular/core';
import {Menu} from '../model/menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  rol: string;
  public samplePagesCollapsed = true;
  public menuItems: any[];
  menuInfoUser: Array<Menu> = new Array();
  username: string;
  cargo: string;
  codigo: string;
  valor ;
  sexo;


  constructor() {
    this.menuInfoUser = [
      {"codM":"0","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"1","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"2","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"3","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"4","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"5","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""},
      {"codM":"6","pathM":"VICERECTOR ADMINISTRATIVO","titleM":"","iconM":"","classM":"","rolM":"","statusM":""}

    ];
    let item=sessionStorage.getItem("app-login");
    let userLogin=JSON.parse(item);

    this.username=userLogin.usuario.ausrFlname.charAt(0).toUpperCase()+userLogin.usuario.ausrFlname.substr(1).toLowerCase()+' '+userLogin.usuario.ausrSlname.charAt(0).toUpperCase()
      +userLogin.usuario.ausrSlname.substr(1).toLowerCase();

    if(userLogin.usuario.ausrFname ==='Query'){
      this.cargo = 'CONSULTAS';
    }else{
      this.cargo = 'ADMINISTRADOR';
    }

    this.sexo = userLogin.persona.genero;

    this.codigo = userLogin.roles[0].roleId;
  }

  ngOnInit() {
    this.valor = 'rerere';
    this.valor = 123456;
    this.rol = localStorage.getItem('id');
    console.log('ID' + this.rol);
    console.log('ID-CODIGO' + this.codigo);
  }



}
