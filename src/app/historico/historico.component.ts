import { Component, OnInit } from '@angular/core';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Router} from '@angular/router';
import {ListadoSolicitud} from '../model/response/listado-solicitud';
import {RespSolicitud} from '../model/response/resp-solicitud';
import {Historico} from '../model/historico';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  solicitdudes1: ListadoSolicitud[];

  solicitdud: ListadoSolicitud;
  public parametro: string = '';
  public listado;
  public soliTemp: RespSolicitud;
  historicos: Historico;
  // historico: Historico;
  cols: any[];

  constructor(private _service: CorrespondenciaService,
              private router: Router
  ) { }

  ngOnInit() {
    this.historicos = new Historico();
    this.historicos.data = [];
    this._service.listadoHistorico().subscribe(response => {
      this.historicos = response;
      console.info('Tipo Solicitud.....:.. :::::', JSON.stringify(response));
    });
    this.cols = [
      { field: 'solicId', header: 'ID' },
      { field: 'fechaRegistro', header: 'Fecha Registro' },
      { field: 'nomSolic', header: 'solicitante' },
      { field: 'nomAsignado', header: 'Asignado'},
      { field: 'tipoCaso', header: 'Tipo de Caso' },
      { field: 'hojaRuta', header: 'Hoja de Ruta' },
      ///{ field: 'tipoSolic', header: 'Tipo' },
      { field: 'solicId', header: 'Accion' },
    ];
  }

  mostrarSolicitud(id: number){
    window.open(environment.urlBackEndSolicitudUSB + 'registradas/pdf/solicitudes/' + id);
  }

}
