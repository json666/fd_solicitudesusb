import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Solicitudes} from '../model/solicitudes';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {RegistroSolicitud} from '../model/registro-solicitud';
import {RegSolicitud} from '../model/reg-solicitud';
import {RemExterno} from '../model/rem-externo';
import {RegDestinatario} from '../model/reg-destinatario';
import {DetSolicitud} from '../model/det-solicitud';
import {ParametricaService} from '../service/parametrica.service';
import {Dominio} from '../model/dominio';
import {Solicitud} from '../model/solicitud';
import {Solicitante} from '../model/solicitante';

@Component({
  selector: 'app-modifica-soli-externa',
  templateUrl: './modifica-soli-externa.component.html',
  styleUrls: ['./modifica-soli-externa.component.scss']
})
export class ModificaSoliExternaComponent implements OnInit {

  solicitudes: Solicitudes = new Solicitudes();
  public regSolicitud: RegistroSolicitud = new RegistroSolicitud();
  public regSolicitudAnterior: RegistroSolicitud = new RegistroSolicitud();
  public tipoGenero: Array<Dominio> = new Array<Dominio>();
  public tipoDocumentoList: Array<Dominio> = new Array<Dominio>();
  public tipoCaso: Array<Dominio> = new Array<Dominio>();
  loading: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _serv: CorrespondenciaService,
              private _param: ParametricaService) {
  }

  ngOnInit() {
    this.solicitudes.solicitud = new Solicitud();
    this.solicitudes.solicitante = new Solicitante();
    this._param.getDatosDominio('docid').subscribe(response3 => {
      this.tipoDocumentoList = response3;
    });
    this._param.getDatosDominio('genero').subscribe(response4 => {
      this.tipoGenero = response4;
    });

    this._param.getDatosDominio('tipocaso').subscribe(response2 => {
      this.tipoCaso = response2;
    });
    this.regSolicitud.solicitud = new RegSolicitud();
    this.regSolicitud.remExterno = new RemExterno();
    this.regSolicitud.destinatario = new RegDestinatario();
    this.regSolicitud.detallesSolicitud = new DetSolicitud();
    this.loading = true;
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.info('ID:' + id);
      setTimeout(() => {
        this._serv.cargarDatosSolicitud(id).subscribe(response => {
          this.regSolicitudAnterior = response;
          this.regSolicitud = response;
          for (const docEle of this.tipoCaso) {
            if (docEle.id === this.regSolicitud.solicitud.tipoCaso) {
              this.solicitudes.caso = docEle;
            }
          }
          for (const docEle of this.tipoGenero) {
            if (docEle.id === Number(this.regSolicitud.remExterno.genero)) {
              this.solicitudes.solicitante.sexo = docEle;
            }
          }
          for (const docTd of this.tipoDocumentoList) {
            if (docTd.id === Number(this.regSolicitud.solicitud.tipoDoc)) {
              this.solicitudes.solicitante.tipDoc = docTd;
            }
          }
          this.loading = false;

        });
      }, 3000);
    });
  }


  modificarSolicitud(f) {
    this.loading = true;
    console.info('Modificar Solicitud:.. *************', JSON.stringify(this.regSolicitud));
    this.regSolicitud.destinatario = new RegDestinatario();
    let reg = JSON.stringify(this.regSolicitud);

    this._serv.actualizarSolicitud(reg).subscribe(response => {
        alert('Se realizo la modificación del registro exitosamente.');
        this.regSolicitud = new RegistroSolicitud();
        this.solicitudes = new Solicitudes();
        let link = ['home/consulta-correspondencia/'];
        console.info(link);
        this.router.navigate(link);
        this.loading = false;
      },
      error => {
        alert('No se pudo concretar el registro, por  favor comuniquese con soporte tecnico o vuelva a intentar.');
        this.loading = false;
      });
  }

}
