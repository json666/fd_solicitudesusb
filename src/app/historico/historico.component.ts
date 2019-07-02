import { Component, OnInit } from '@angular/core';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Router} from '@angular/router';
import {ListadoSolicitud} from '../model/response/listado-solicitud';
import {RespSolicitud} from '../model/response/resp-solicitud';
import {Historico} from '../model/historico';

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
      { field: 'solicId', header: 'SolicId' },
      { field: 'fechaRegistro', header: 'FechaRegistro' },
      { field: 'nomSolic', header: 'NomSolic' },
      { field: 'nomAsignado', header: 'NomAsignado'},
      { field: 'tipoCaso', header: 'TipoCaso' },
      { field: 'hojaRuta', header: 'HojaRuta' },
      { field: 'tipoSolic', header: 'TipoSolic' }
    ];
  }

}
