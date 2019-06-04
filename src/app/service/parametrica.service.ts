import { Injectable } from '@angular/core';
import {Parametrica} from '../model/parametrica';
import {Historico} from '../model/historico';
import {HttpClient} from '@angular/common/http';
import {Dominio} from '../model/dominio';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametricaService {

  tipoDocumentoSolicitudList: Array<Parametrica> = new Array();
  tipoCargoList: Array<Parametrica> = new Array();
  tipoSexoList: Array<Parametrica> = new Array<Parametrica>();
  tipoSolicitudList: Array<Parametrica> = new Array<Parametrica>();
  tipoDocumentoList: Array<Parametrica> = new Array<Parametrica>();
  tipoTareasList: Array<Parametrica> = new Array<Parametrica>();
  historicoSolicitudList: Array<Historico> = new Array<Historico>();
  historico: Historico;


  tipoGenero: Array<Dominio> = new Array<Dominio>();

  constructor(private http: HttpClient) { }

  mostrarTipoDocumentoSolicitante() {
    this.tipoDocumentoSolicitudList = [
      {"cod": "CT", "des": "CARTA"},
      {"cod": "SB", "des": "SOBRE"},
      {"cod": "CEL", "des": "CORREO ELECTRONICO"},
      {"cod": "IMG", "des": "IMAGEN"}
    ];
    return this.tipoDocumentoSolicitudList;
  }
  mostrarTipoCargo() {
    this.tipoCargoList = [
      {"cod":"01","des":"VICERECTOR ADMINISTRATIVO"},
      {"cod":"02","des":"UNIDAD DE ORIENTACION"},
      {"cod":"03","des":"UNIDAD JURIDICA"},
      {"cod":"04","des":"UNIDAD TECNOLOGICA"}
    ];
    return this.tipoCargoList;
  }

  getMostrarTipoSexo(): Observable<any> {
    /*this.tipoSexoList = [
      {"cod": "MA", "des": "MASCULINO"},
      {"cod": "FE", "des": "FEMENINO"}
    ];*/
    return this.http.get(environment.urlBackEndSolicitudUSB+'dominios/grupos/genero').map(this.extractData);
  }

  getMostrarUnidades(): Observable<any> {
    return this.http.get(environment.urlBackEndSolicitudUSB+'unidades').map(this.extractData);
  }

  getMostrarResponsablesPorUnidad(idUnidad: string): Observable<any> {
    return this.http.get(environment.urlBackEndSolicitudUSB+'unidades/'+idUnidad+'/personas').map(this.extractData);
  }

  mostrarTipoSolicitud(){
    this.tipoSolicitudList=[
      {"cod":"INTm,", "des":"INTERNO"},
      {"cod":"EXT", "des":"EXTERNO"}
    ];
  }

  getMostrarTipoDocumento(): Observable<any> {
    /*this.tipoDocumentoList = [
      {"cod": "CI", "des": "CARNET DE IDENTIDAD"},
      {"cod": "PAS", "des": "PASAPORTE"},
      {"cod": "NIT", "des": "NUMERO DE IDENTIFICACION TRIBUTARIA"},
      {"cod": "LIC", "des": "LICENCIA DE CONDUCIR"},
      {"cod": "CUN", "des": "CARNET UNIVERSITARIO"}

    ]*/
    return this.http.get(environment.urlBackEndSolicitudUSB+'dominios/grupos/').map(this.extractData);

  }

  getDatosDominio(codigo: string):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'dominios/grupos/'+codigo).map(this.extractData);
  }

  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  makeRuta(length){
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


  generaCITE(codigo: string):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'cites/gen/'+codigo).map(this.extractData);
  }

  mostrarTareas(){
    this.tipoTareasList=[
      {"cod":"ATU","des":"ATENCION URGENTE"},
      {"cod":"EIN","des":"ELABORAR INFORME"},
      {"cod":"ERE","des":"ELABORAR RESPUESTA"},
      {"cod":"PSN","des":"PARA SU CONSIDERACION"},
      {"cod":"PSC","des":"PARA SU CONOCIMIENTO"},
      {"cod":"PVB","des":"PARA Vo Bo"},
      {"cod":"ARC","des":"ARCHIVAR"}
    ];
    return this.tipoTareasList;
  }
  listtadoHistoricoSolicitudes(){

    this.historicoSolicitudList = [];
    return this.historicoSolicitudList;
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
    //console.log(body)
  }

  private handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
