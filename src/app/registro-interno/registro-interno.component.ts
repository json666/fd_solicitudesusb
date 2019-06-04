import { Component, OnInit } from '@angular/core';
import {ParametricaService} from '../service/parametrica.service';
import {Parametrica} from '../model/parametrica';
import {Solicitud} from '../model/solicitud';
import {Solicitante} from '../model/solicitante';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Destinatario} from '../model/destinatario';
import {formatDate} from '@angular/common';
import {LOCALE_DATA} from '@angular/common/src/i18n/locale_data';
import {Locale} from 'ngx-bootstrap/chronos/locale/locale.class';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-registro-interno',
  templateUrl: './registro-interno.component.html',
  styleUrls: ['./registro-interno.component.scss']
})
export class RegistroInternoComponent implements OnInit {
  solicitudFrm: FormGroup;
  solicitud: Solicitud = new Solicitud();
  public tipoSexoList: Array<Parametrica>;
  public tipoDocumentoList: Array<Parametrica>;
  loading: boolean = false;


  constructor(private _param: ParametricaService,
              private _frmBuilder: FormBuilder) {

   /*this.solicitudFrm = this._frmBuilder.group({
      'nombre' : ['', Validators.compose([Validators.required])],
      'paterno' : ['', Validators.compose([Validators.required])],
      'materno' : ['', Validators.compose([Validators.required])],
      'telefono' : ['', Validators.compose([Validators.required])],
      'celular' : ['', Validators.compose([Validators.required])],
      'direccion' : ['', Validators.compose([Validators.required])],
      'correo' : ['', Validators.compose([Validators.required])],
      'ci' : ['', Validators.compose([Validators.required])],
      'tipoDoc' : ['', Validators.compose([Validators.required])],
      'genero' : ['', Validators.compose([Validators.required])],
      'requerimiento' : ['', Validators.compose([Validators.required])]
    });*/

  }

  ngOnInit() {
    /*this.solicitud.solicitante = new Solicitante();
    this.solicitud.destinatario = new Destinatario();*/
    // this.tipoSexoList = this._param.mostrarTipoSexo();
   // this.tipoDocumentoList = this._param.mostrarTipoDocumento();
  }

  recibir() {
    this.loading=true;
    delay(200000);
    console.info('Valor loading:'+this.loading);
    let localToken = localStorage.getItem('id');
    let item = sessionStorage.getItem("app-login");
    console.info("Session:"+item);
    console.info("id:"+localToken);
    let itemI=JSON.parse(item);
    console.info("Session I:"+item);
    this.solicitud.id=itemI.id;

    let today=formatDate(new Date(),'yyyy/MM/dd hh:mm:dd','en');
    /*this.solicitud.destinatario.nombre= itemI.nombre;
    this.solicitud.destinatario.paterno= itemI.primerApellido;
    this.solicitud.destinatario.materno= itemI.segundoApelido;
    this.solicitud.destinatario.unidad=itemI.unidad;
    this.solicitud.destinatario.cargo=itemI.rol;
    this.solicitud.fecReg=new Date(today);*/
    console.info(" Registrar Solicitud:.. ", this.solicitud);
    console.info(" Registrar Solicitud:.. 2", JSON.stringify(this.solicitud));
    this.loading=false;
    console.info('Valor loading I:'+this.loading);
  }

}
