import { Component, OnInit } from '@angular/core';
import {ParametricaService} from '../service/parametrica.service';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Dominio} from '../model/dominio';
import {Unidades} from '../model/unidades';

@Component({
  selector: 'app-asignar-solicitud',
  templateUrl: './asignar-solicitud.component.html',
  styleUrls: ['./asignar-solicitud.component.scss']
})
export class AsignarSolicitudComponent implements OnInit {

  tipoAccion: Array<Dominio> = new Array<Dominio>();
  tipoUnidad: Array<Unidades> = new Array<Unidades>();

  constructor(private _param: ParametricaService,
              private __serv: CorrespondenciaService,
              private _frmBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnInit() {
    this._param.getDatosDominio('tareasolic').subscribe(response => {
      this.tipoAccion = response;
    });

    this._param.getMostrarUnidades().subscribe(response => {
      this.tipoUnidad = response;
    });
  }


  cargarPersonas(objSelected:Event): void {
    console.info("onselectActividad2",objSelected.target["selectedIndex"]);
    let index=objSelected.target["selectedIndex"];
    if (objSelected !== undefined) {
      console.info("Hay evnetos:"+objSelected.target);
    }

  }

}
