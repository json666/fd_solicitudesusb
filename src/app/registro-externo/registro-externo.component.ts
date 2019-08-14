import {Component, OnInit} from '@angular/core';
import {ParametricaService} from '../service/parametrica.service';
import {Parametrica} from '../model/parametrica';
import {Solicitud} from '../model/solicitud';
import {Solicitante} from '../model/solicitante';
import {Dominio} from '../model/dominio';
import {NumeroTramite} from '../model/numero-tramite';
import {Solicitudes} from '../model/solicitudes';
import {RegistroInterno} from '../model/registro-interno';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {RegSolicitud} from '../model/reg-solicitud';
import {RegDestinatario} from '../model/reg-destinatario';
import {RemInterno} from '../model/rem-interno';
import {Message} from 'primeng/api';
import {RemExterno} from '../model/rem-externo';

@Component({
  selector: 'app-registro-externo',
  templateUrl: './registro-externo.component.html',
  styleUrls: ['./registro-externo.component.scss']
})
export class RegistroExternoComponent implements OnInit {
  solicitudes: Solicitudes = new Solicitudes();

  public tipoSexoList: Array<Parametrica>;
  loading = false;
  tipoGenero: Array<Dominio> = new Array<Dominio>();
  tipoDocumentoList: Array<Dominio> = new Array<Dominio>();
  tipoCaso: Array<Dominio> = new Array<Dominio>();
  regSolicitud: RegistroInterno = new RegistroInterno();
  tipoCasoReg: Array<Dominio> = new Array<Dominio>();
  cite: string;
  h_ruta: string;

  public cites: NumeroTramite;
  public hoja_ruta: NumeroTramite;

  tipoAccion: Array<Dominio> = new Array<Dominio>();
  tipoDocumentoAccion: Array<Dominio> = new Array<Dominio>();
  userSession;
  userFinal;
  data: any = {};

  msgs: Message[] = [];

  hojasPattern = '^[0-9]{3}$';

  /*internoForm = new FormGroup({
    hojas: new FormControl('', Validators.pattern(this.hojasPattern))
  });*/
  isValidFormInterno = null;
  // internoForm = this._frmBuilder.group({
  //   hojas: ['', [Validators.required, Validators.pattern(this.hojasPattern)]]
  // });


  constructor(private _param: ParametricaService,
              private _serv: CorrespondenciaService,
              private _frmBuilder: FormBuilder,
              private router: Router/*,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              public dialogService: DialogService*/) {
  }

  ngOnInit() {
    this.userSession = sessionStorage.getItem('app-login');
    this.userFinal = JSON.parse(this.userSession);

    this.solicitudes.solicitud = new Solicitud();
    this.solicitudes.solicitante = new Solicitante();
    // this.solicitudes.destinatario = new Destinatario();
    this.regSolicitud.solicitud = new RegSolicitud();
    this.regSolicitud.remInterno = new RemInterno();
    this.regSolicitud.destinatario = new RegDestinatario();
    this.regSolicitud.remExterno = new RemExterno();

    // this._param.generaCITE('INT').subscribe(response1 => {
    //   this.hoja_ruta = response1;
    //   this.h_ruta = this.hoja_ruta.valor;
    // });
    // this._param.generaCITE('CITE').subscribe(response => {
    //   this.cites = response;
    //   this.cite = this.cites.valor;
    // });
    /// tipo documento
    this._param.getDatosDominio('docsolic').subscribe(response3 => {
      this.tipoDocumentoAccion = response3;
    });

    //tarea accion
    this._param.getDatosDominio('tareasolic').subscribe(response4 => {
      this.tipoAccion = response4;
    });

    this._param.getDatosDominio('tcasoint').subscribe(response => {
      this.tipoCasoReg = response;
    });

  }


  /* get hojas() {
     return this.internoForm.get('hojas');
   }*/
  registrarInternos() {

    /*this.isValidFormInterno = false;
    if (this.internoForm.invalid) {
      return;
    }
    this.isValidFormInterno = true;*/
    this.loading = true;
    /*Id Destinatario*/
    this.regSolicitud.tarea = 'Aqui va la descripcion de la tarea';
    this.regSolicitud.tipoTareaId = this.solicitudes.solicitud.taccion.id;
    console.log('TDOCTAR:' + this.solicitudes.solicitud.limite + '' + this.userFinal.persona.id);
    /*Remitente Interno*/
    /*Remitente Interno*/
    this.regSolicitud.remExterno.nomJuridico = this.solicitudes.solicitante.nombre !== undefined ? this.solicitudes.solicitante.nombre.toUpperCase() : '';
    this.regSolicitud.remExterno.nombre = this.solicitudes.solicitante.nombre !== undefined ? this.solicitudes.solicitante.nombre.toUpperCase() : '';
    this.regSolicitud.remExterno.juridico = true;
    console.info('Tipo1:' +this.solicitudes.solicitante.natural);
    console.info('Tipo2:' +this.solicitudes.solicitante.juridico);
    //this.regSolicitud.remExterno.numDoc = this.solicitudes.solicitante.ci;
    this.regSolicitud.remExterno.fono1 = this.solicitudes.solicitante.fono1;
    this.regSolicitud.remExterno.email = this.solicitudes.solicitante.email;

    // this.regSolicitud.solicitud.hojaRuta = this.h_ruta;
    this.regSolicitud.solicitud.hojaRuta = '';//"";
    this.regSolicitud.solicitud.solicCite = '';//this.cite;
    // this.regSolicitud.solicitud.solicCite = this.cite;
    console.log('TDOC:' + this.solicitudes.solicitud.tipDocSolicitud.cod);
    console.log('TDOC ID:' + this.solicitudes.solicitud.tipDocSolicitud.id);
    this.regSolicitud.solicitud.tipoDoc = this.solicitudes.solicitud.tipDocSolicitud.id;
    this.regSolicitud.solicitud.tipoCaso = Number(this.solicitudes.caso.id);
    this.regSolicitud.remInterno.id = this.userFinal.persona.id;
    this.regSolicitud.solicitud.persId = this.userFinal.persona.id;
    this.regSolicitud.solicitud.interna = 'true';
    this.regSolicitud.destinatario.id = this.userFinal.persona.id;
    this.regSolicitud.solicitud.solicRef = this.solicitudes.solicitud.referencia !== undefined ? this.solicitudes.solicitud.referencia.toUpperCase() : '';
    this.regSolicitud.solicitud.nroHojas = Number(this.solicitudes.solicitud.nroHojas !== undefined
    && this.solicitudes.solicitud.nroHojas !== '' ? this.solicitudes.solicitud.nroHojas : 0);
    let dtn = new Date(this.solicitudes.solicitud.limite);
    this.regSolicitud.solicitud.limite = new Date(dtn);
    console.info('Registrar Solicitud:.. *************', JSON.stringify(this.regSolicitud));
    const reg = JSON.stringify(this.regSolicitud);
    const link = ['home/consulta-correspondencia/'];
    this._serv.registroSolicitud(reg).subscribe(response => {
        console.log('response:' + JSON.stringify(response));
          alert('Se realizo el registro exitosamente.');
          this.regSolicitud = new RegistroInterno();
          this.solicitudes = new Solicitudes();
          this.router.navigate(link);
          this.loading = false;
      },
      error => {
        alert('No se pudo concretar el registro, por  favor comuniquese con soporte tecnico o vuelva a intentar.');
        this.router.navigate(link);
        this.loading = false;
      });

  }

  /*confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }*/


}
