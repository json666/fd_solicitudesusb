import { Component, OnInit } from '@angular/core';
import {Parametrica} from '../model/parametrica';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Solicitud} from '../model/solicitud';
import {ValidacionService} from '../service/validacion.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-registro-correspondencia',
  templateUrl: './registro-correspondencia.component.html',
  styleUrls: ['./registro-correspondencia.component.scss']
})
export class RegistroCorrespondenciaComponent implements OnInit {
  tipoCargoList: Array<Parametrica> = new Array();
  tipoDocumentoList: Array<Parametrica> = new Array();
  solicitudForm: FormGroup;
  solicitud: Solicitud = new Solicitud();
  tipoSolicitudList: Array<Parametrica> = new Array<Parametrica>();
  loading: boolean = false;

  constructor(private _formBuilder: FormBuilder) {

    this.tipoCargoList = [
      {"cod":"1","des":"VICERECTOR ADMINISTRATIVO"},
      {"cod":"2","des":"UNIDAD DE ORIENTACION"},
      {"cod":"3","des":"UNIDAD JURIDICA"},
      {"cod":"4","des":"UNIDAD TECNOLOGICA"}
    ];
    this.tipoDocumentoList = [
      {"cod" : "5","des":"CARTA"},
      {"cod":"6","des":"SOBRE"},
      {"cod":"7","des":"CORREO ELECTRONICO "},
      {"cod":"8","des":"IMAGEN"}
    ];

    this.tipoSolicitudList=[
      {"cod":"9", "des":"INTERNO"},
      {"cod":"10", "des":"EXTERNO"}
    ]


    this.solicitudForm = this._formBuilder.group({
      'nomRemi' : ['', Validators.compose([Validators.required])],
      'carRemi' : ['', Validators.compose([Validators.required])],
      'nomDesti' : ['', Validators.compose([Validators.required])],
      'carDesti' : ['', Validators.compose([Validators.required])],
      'referencia' : ['', Validators.compose([Validators.required])],
      'tipDoc' : ['', Validators.compose([Validators.required])],
      'nroHojas' : ['', Validators.compose([Validators.required])],
      'fecReg' : ['', Validators.compose([Validators.required])],
      // 'fecReg' : ['', Validators.compose([Validators.required, ValidacionService.date_ddmmyyyy_hhmm])],


    });
  }

  ngOnInit() {
  }


registrarSolicitud() {
  this.loading = true;
  console.info(" Registrar Solicitud:.. ", this.solicitud);
  console.info(" Registrar Solicitud:.. 2", JSON.stringify(this.solicitud));
  delay(10000);
  this.loading = false;
}

}
