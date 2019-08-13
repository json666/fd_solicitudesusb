import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ParametricaService} from '../service/parametrica.service';
import {Dominio} from '../model/dominio';
import {RegistroInterno} from '../model/registro-interno';
import {NumeroTramite} from '../model/numero-tramite';
import {Solicitud} from '../model/solicitud';
import {Solicitante} from '../model/solicitante';
import {Solicitudes} from '../model/solicitudes';
import {RegSolicitud} from '../model/reg-solicitud';
import {RemExterno} from '../model/rem-externo';
import {RegDestinatario} from '../model/reg-destinatario';
import {DetSolicitud} from '../model/det-solicitud';
import {RemInterno} from '../model/rem-interno';
import {Unidades} from '../model/unidades';
import {Persona} from '../model/persona';
import {Estados} from '../model/estados';
import {Revisiones} from '../model/revisiones';

@Component({
  selector: 'app-mod-solicitud-interna',
  templateUrl: './mod-solicitud-interna.component.html',
  styleUrls: ['./mod-solicitud-interna.component.scss']
})
export class ModSolicitudInternaComponent implements OnInit {

  solicitudes: Solicitudes = new Solicitudes();
  tipoCaso: Array<Dominio> = new Array<Dominio>();
  tipoDocumentoAccion: Array<Dominio> = new Array<Dominio>();
  tipoAccion: Array<Dominio> = new Array<Dominio>();
  regSolicitud: RegistroInterno = new RegistroInterno();
  regSolicitudAnterior: RegistroInterno = new RegistroInterno();
  verRevisiones = false;
  loading = false;
  userSession;
  userFinal;
  cite: string;
  public cites: NumeroTramite;
  public hoja_ruta: NumeroTramite;
  public tipoDocumentoSolic: Array<Dominio> = new Array<Dominio>();
  public tipoAccionSolic: Array<Dominio> = new Array<Dominio>();

  tipoUnidad: Array<Unidades> = new Array<Unidades>();
  listadoPersonas: Array<Persona> = new Array<Persona>();
  listaEstados: Array<Estados> = new Array<Estados>();
  revisiones: Revisiones;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _serv: CorrespondenciaService,
              private _param: ParametricaService) {
  }

  ngOnInit() {
    this.revisiones = new Revisiones();

    this.regSolicitud.solicitud = new RegSolicitud();
    this.regSolicitud.remInterno = new RemInterno();
    this.regSolicitud.destinatario = new RegDestinatario();

    this.solicitudes.solicitud = new Solicitud();
    this.solicitudes.solicitante = new Solicitante();
    this._param.getDatosDominio('docsolic').subscribe(response3 => {
      this.tipoDocumentoSolic = response3;
    });

    this._param.getDatosDominio('tcasoint').subscribe(response4 => {
      this.tipoAccionSolic = response4;
    });

    this._serv.estadosSolicitud().subscribe(response => {
      this.listaEstados = response;
    });

    // this._serv.listadoUnidades().subscribe(response4 => {
    //   this.tipoUnidad = response4;
    // });
    this._serv.listadoPersonasUnidad().subscribe(response4 => {
      this.listadoPersonas = response4;
    });

    this._param.getDatosDominio('tareasolic').subscribe(response4 => {
      this.tipoAccion = response4;
    });

    this.loading = true;


    this.route.params.subscribe(params => {
      const id = params['id'];
      //setTimeout(() => {
      this._serv.cargarDatosSolicitud(id).subscribe(response => {
          console.info('resultado de la solic interna:' + JSON.stringify(response));
          this.regSolicitudAnterior = response;
          this.regSolicitud = response;
          for (const docEle of this.tipoDocumentoSolic) {
            if (docEle.id === this.regSolicitud.solicitud.tipoDoc) {
              this.solicitudes.solicitud.tipDocSolicitud = docEle;
            }
          }
          for (const docEle of this.tipoAccionSolic) {
            if (docEle.id === this.regSolicitud.solicitud.tipoCaso) {
              this.solicitudes.solicitud.taccion = docEle;
            }
          }
          if (this.regSolicitud.revisiones.length > 0) {
            this.verRevisiones = true;

          }
          this.loading = false;
        },
        error => {
          alert('No se pudo concretar el registro, por  favor comuniquese con soporte tecnico o vuelva a intentar.');
          this.loading = false;
        });
      //}, 3000);
    });
  }

  cargarPersonas(objSelected: Event): void {
    const index = objSelected.target['selectedIndex'] + 1;
    // if (index !== undefined) {
    /*this._serv.listadoPersonasUnidad(index).subscribe(response4 => {
      this.listadoPersonas = response4;
    });*/
    // }

  }

  adicionarRevisiones() {
    const revision = new Revisiones();
    revision.solicId = this.regSolicitud.solicitud.solicId;
    revision.fecha = new Date().getTime();
    revision.desc = this.revisiones.desc;
    revision.idPersona = this.revisiones.personas.id;
    revision.idTipoTarea = this.revisiones.accion.id;
    revision.idEsolic = this.revisiones.estado.esolicId;
    console.info('Para enviar a registra revision:.......' + JSON.stringify(revision));
    this._serv.registrarRevisiones(revision).subscribe(response => {
      alert('Se realizo el registro de la revision');
      const link = ['home/consulta-correspondencia/'];
      this.router.navigate(link);
    });
    /*this._serv.registrarRevisiones(revision).subscribe(response4 => {
      alert('Se realizo el registro de la revision');
      const link = ['home/consulta-correspondencia/'];
      this.router.navigate(link);
      this.loading = false;
    });*/
  }
}
