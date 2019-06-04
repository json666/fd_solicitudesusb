import {Component, OnInit} from '@angular/core';
import {Solicitud} from '../model/solicitud';
import {Solicitante} from '../model/solicitante';
import {formatDate} from '@angular/common';
import {RespSolicitud} from '../model/response/resp-solicitud';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ListadoSolicitud} from '../model/response/listado-solicitud';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-consultas-correspondencia',
  templateUrl: './consultas-correspondencia.component.html',
  styleUrls: ['./consultas-correspondencia.component.scss']
})
export class ConsultasCorrespondenciaComponent implements OnInit {

  solicitudes: Solicitud[];

  solicitdudes1: ListadoSolicitud[];

  solicitdud: ListadoSolicitud;

  public parametro: string = '';
  public listado;
  public soliTemp: RespSolicitud;

  constructor(private _service: CorrespondenciaService,
              private router: Router) {
  }

  ngOnInit() {
    this.solicitudes = [];
    this.soliTemp = new RespSolicitud();
    this._service.listadoSolicitudes().subscribe(response => {
      this.solicitdudes1 = response;
      console.info('Tipo Solicitud.....:.. :::::', JSON.stringify(response));
      /* for (const element of  this.solicitdudes1 ) {
             console.info("ELELEMENTO:"+element.solicitud.interna);
       }
       console.info('Solicitudes.....:.. 2', JSON.stringify(response));*/
      // let value = JSON.stringify(this.solicitdudes1);
      // let soli[] = JSON.parse(value);
      // console.info('Solicitudes.....:..  value', value);
      // this.soliTemp = value.solicitud;
      // console.log("Solcitud:" + this.soliTemp);
      //
      // console.info('Date:'+date);
      // var d = new Date(parseInt(date, 10));
      // var ds = d.toString('MM/dd/yy HH:mm:ss');
    });

  }

  cargarSolicitudes() {

    let solicitud = new Solicitud();
    solicitud.solicitante = new Solicitante();
    solicitud.id = 2000;
    solicitud.fecReg = '2019-04-28';
    let solici = new Solicitante();
    solicitud.solicitante.nombre = 'Fernando';
    solicitud.solicitante.paterno = 'Rios';
    solicitud.requerimiento = 'INTERNO';
    this.solicitudes.push(solicitud);
    solicitud = new Solicitud();
    solicitud.solicitante = new Solicitante();
    solicitud.id = 2001;
    solicitud.fecReg = '2019-04-28';
    solici = new Solicitante();
    solicitud.solicitante = new Solicitante();
    solicitud.solicitante.nombre = 'Jheyson';
    solicitud.solicitante.paterno = 'Sanchez';
    solicitud.requerimiento = 'EXTERNO';
    this.solicitudes.push(solicitud);
    solicitud = new Solicitud();
    solicitud.solicitante = new Solicitante();
    solicitud.id = 2002;
    solicitud.fecReg = '2019-04-28';
    solici = new Solicitante();
    solicitud.solicitante.nombre = 'Hugo';
    solicitud.solicitante.paterno = 'Davila';
    solicitud.requerimiento = 'INTERNO';
    this.solicitudes.push(solicitud);
  }


  editarFormulario(id: string) {
    alert('Desea continuar con el proceso?');
    let link = ['home/mod-solicitud-externa/' + id];
    console.log(link);
    this.router.navigate(link);
  }


  busqueda() {
    console.info('Parametro.....:.. :::::', this.parametro);
    this._service.listadoSolicitudesPorFilter(this.parametro).subscribe(response => {
      this.solicitdudes1 = null;
      this.solicitdudes1 = response;
      console.info('***********************************Tipo Solicitud***********************************.....:.. :::::', JSON.stringify(response));
      /*for (const element of  this.solicitdudes1 ) {
        console.info("ELELEMENTO:"+element.solicitud.interna);
      }
      console.info('Solicitudes.....:.. 2', JSON.stringify(response));*/
    });

  }

  seguimiento(id: string) {
    let link = ['home/mod-solicitud-interna/' + id];
    console.log(link);
    this.router.navigate(link);
  }

  mostrarReporte(id: string) {
    window.open(environment.urlBackEndSolicitudUSB + 'registradas/pdf/externos/' + id);
    /*this._service.generarReporte(id).subscribe(response => {
      window.open("http://localhost:9999/susb-api/registradas/pdf/externos/"+id);
      console.info('***********************************Reporte***********************************.....:.. :::::'+response);

      /!*for (const element of  this.solicitdudes1 ) {
        console.info("ELELEMENTO:"+element.solicitud.interna);
      }
      console.info('Solicitudes.....:.. 2', JSON.stringify(response));*!/
    });*/
  }

  soloCambioEstado(id:string) {

    let link = ['home/app-anulacion/' + id];
    console.log(link);
    this.router.navigate(link);
  }

}
