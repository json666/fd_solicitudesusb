import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Solicitud} from '../model/solicitud';
import {Parametrica} from '../model/parametrica';
import {Solicitudes} from '../model/solicitudes';
import {ParametricaService} from '../service/parametrica.service';
import {Solicitante} from '../model/solicitante';
import {Destinatario} from '../model/destinatario';
import {Dominio} from '../model/dominio';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Router} from '@angular/router';
import {RegistroSolicitud} from '../model/registro-solicitud';
import {RegSolicitud} from '../model/reg-solicitud';
import {RemExterno} from '../model/rem-externo';
import {RegDestinatario} from '../model/reg-destinatario';
import {DetSolicitud} from '../model/det-solicitud';
import {NumeroTramite} from '../model/numero-tramite';

@Component({
  selector: 'app-solicitud-externa',
  templateUrl: './solicitud-externa.component.html',
  styleUrls: ['./solicitud-externa.component.scss']
})
export class SolicitudExternaComponent implements OnInit, OnDestroy {

  solicitudFrm: FormGroup;
  solicitudes: Solicitudes = new Solicitudes();

  public tipoSexoList: Array<Parametrica>;
  // public tipoDocumentoList: Array<Parametrica>;
  loading: boolean = false;
  userSession;
  userFinal;
  tipoGenero: Array<Dominio> = new Array<Dominio>();
  tipoDocumentoList: Array<Dominio> = new Array<Dominio>();
  tipoCaso: Array<Dominio> = new Array<Dominio>();
  regSolicitud: RegistroSolicitud = new RegistroSolicitud();
  cite: string;
  h_ruta: string;
  form: any;

  public cites: NumeroTramite;
  public hoja_ruta: NumeroTramite;

  constructor(private _param: ParametricaService,
              private _serv: CorrespondenciaService,
              private _frmBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnInit() {
    this.solicitudes.solicitud = new Solicitud();
    this.solicitudes.solicitante = new Solicitante();
    this.solicitudes.destinatario = new Destinatario();
    this.userSession = sessionStorage.getItem('app-login');
    this.userFinal = JSON.parse(this.userSession);
    this.regSolicitud.solicitud = new RegSolicitud();
    this.regSolicitud.remExterno = new RemExterno();
    this.regSolicitud.destinatario = new RegDestinatario();

    this._param.getDatosDominio('docid').subscribe(response3 => {
      this.tipoDocumentoList = response3;
    });
    this._param.getDatosDominio('genero').subscribe(response4 => {
      this.tipoGenero = response4;
    });

    this._param.getDatosDominio('tipocaso').subscribe(response2 => {
      this.tipoCaso = response2;
    });

    // this._param.generaCITE('EXT').subscribe(response1 => {
    //   this.hoja_ruta = response1;
    //   this.h_ruta = this.hoja_ruta.valor;
    // });
    // this._param.generaCITE('CITE').subscribe(response => {
    //   this.cites = response;
    //   this.cite = this.cites.valor;
    // });


  }

  ngOnDestroy(): void {
  }


  recibir(form) {
    console.log('Login form invalid', form.invalid);//true
    console.log('Login form Valid', form.valid);//false
    console.log('Login form submitted', form.submitted);//false
    if (this.validForm(form)) {
      this.loading = true;
      this.solicitudes.solicitud.tsolicId = '2';
      // this.solicitudes.solicitud.hojaRuta = this.cites.valor;
      this.solicitudes.destinatario.id = this.userFinal.id;
      // console.info('Registrar Solicitud:.. ', this.solicitudes);
      // console.info('Registrar Solicitud:.. 2', JSON.stringify(this.solicitudes));
      this.regSolicitud.tarea = this.solicitudes.tarea.des;
      // this.regSolicitud.solicitud.hojaRuta = this.h_ruta;
      this.regSolicitud.solicitud.hojaRuta = '';
      this.regSolicitud.solicitud.tsolicId = 1;
      // this.regSolicitud.solicitud.solicCite = this.cite;
      this.regSolicitud.solicitud.solicCite = '';
      // console.info("TIPO CASO:**********************************"+this.solicitudes.caso.cod+"**************");
      this.regSolicitud.solicitud.tipoCaso = Number(this.solicitudes.caso.id);
      this.regSolicitud.solicitud.interna = 'false';
      this.regSolicitud.solicitud.solicRef = this.solicitudes.solicitud.requerimiento;
      this.regSolicitud.remExterno.nomJuridico = this.solicitudes.solicitante.nombre.charAt(0).toUpperCase() + '' + this.solicitudes.solicitante.paterno.charAt(0).toUpperCase() + '' + this.solicitudes.solicitante.materno.charAt(0).toUpperCase();
      this.regSolicitud.remExterno.nombre = this.solicitudes.solicitante.nombre;
      this.regSolicitud.remExterno.apellido1 = this.solicitudes.solicitante.paterno;
      this.regSolicitud.remExterno.apellido2 = this.solicitudes.solicitante.materno;
      this.regSolicitud.remExterno.juridico = false;
      this.regSolicitud.remExterno.numDoc = this.solicitudes.solicitante.ci;
      this.regSolicitud.remExterno.fono1 = this.solicitudes.solicitante.fono;
      this.regSolicitud.remExterno.fono2 = this.solicitudes.solicitante.fono1;
      this.regSolicitud.remExterno.email = this.solicitudes.solicitante.email;
      this.regSolicitud.remExterno.genero = String(this.solicitudes.solicitante.sexo.id);
      this.regSolicitud.remExterno.edad = this.solicitudes.solicitante.edad;
      this.regSolicitud.destinatario.id = 2;
      /*Detalle Solicitud*/
      this.regSolicitud.detallesSolicitud = new DetSolicitud();
      this.regSolicitud.detallesSolicitud.req = this.solicitudes.solicitud.requerimiento;
      this.regSolicitud.detallesSolicitud.analisis = this.solicitudes.solicitud.analisis;
      this.regSolicitud.detallesSolicitud.acciones = this.solicitudes.solicitud.recomendaciones;
      this.regSolicitud.detallesSolicitud.remision = this.solicitudes.solicitud.remision;
      this.regSolicitud.detallesSolicitud.observaciones = this.solicitudes.solicitud.observaciones;
      this.regSolicitud.detallesSolicitud.avance = this.solicitudes.solicitud.conclusion;
      this.regSolicitud.tarea = '';
      this.regSolicitud.tipoTareaId = 18;

      console.info('Registrar Solicitud:.. *************', JSON.stringify(this.regSolicitud));
      let reg = JSON.stringify(this.regSolicitud);
      this._serv.registroSolicitud(reg).subscribe(response => {
          console.info('Response:.. *************', response);
          //   if (response.status === '200') {
          alert('Se realizo el registro exitosamente.');
          this.regSolicitud = new RegistroSolicitud();
          this.solicitudes = new Solicitudes();
          let link = ['home/consulta-correspondencia/'];
          console.info(link);
          this.router.navigate(link);
          this.loading = false;
          // }
        },
        error => {
          alert('No se pudo concretar el registro, por  favor comuniquese con soporte tecnico o vuelva a intentar.');
        });
    }
  }

  validForm(f): boolean {
    if (f.valid) {
      console.info("E VALIDADO");
      return true;
    } else {
      console.info("NO VALIDADO");
      return false;
    }
  }

}
