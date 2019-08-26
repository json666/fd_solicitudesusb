import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorrespondenciaService {
  public headers = new HttpHeaders();

  public pathLogin: string;

  constructor(private http: HttpClient) {
      this.pathLogin = "http://localhost:8080/esb/rest/loginshelf/login";
  }
  loginUsuario (data:any): Observable<any> {
    return this.http.post(this.pathLogin, data);
  }

  registroSolicitud(data:any): Observable <any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(environment.urlBackEndSolicitudUSB+'registradas',data,options).map(this.extractData).pipe(catchError(this.handleError));
  }

  actualizarSolicitud(data: any){
    // let headers1 = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(environment.urlBackEndSolicitudUSB+'registradas/upd',data,options).map(this.extractData).pipe(catchError(this.handleError));
  }

  listadoSolicitudes(parametro: any, desde: any, hasta: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas?cite='+parametro+'&desde='+desde+"&hasta="+hasta).map(this.extractData);//catch(this.handleError);
  }


  listadoSolicitudesPorFilter(data : any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas?cite='+data).map(this.extractData);//catch(this.handleError);
  }

  listadoPersonas(){
    return this.http.get(environment.urlBackEndSolicitudUSB+'personas').map(this.extractData);//.catch(this.handleError);
  }

  validaUsuario(data:any):Observable<any>{
      return this.http.post(environment.urlBackEndSolicitudUSB+'auth/login', data).map(this.extractData).pipe(catchError(this.handleError));
  }

  cargarDatosSolicitud(data: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas/'+data).map(this.extractData);//.catch(this.handleError);
  }



  obtieneTotal():Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/totales').map(this.extractData);//.catch(this.handleError);
  }

  obtieneTotalCasos():Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/totalcasos').map(this.extractData);//.catch(this.handleError);
  }


  obtieneTotalCasos1():Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/totalcasos').map(this.extractData);//.catch(this.handleError);
  }

  obtieneDatosEstadisticosA(parametro: any, parametro1: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/solicporcontexto/'+parametro+'/'+parametro1).map(this.extractData);
  }

  obtieneDatosEstadisticosB(parametro: any, parametro1: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/solicportipo/'+parametro+'/'+parametro1).map(this.extractData);
  }
  listadoUnidades(): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'unidades').map(this.extractData);
  }
  listadoPersonasUnidad(): Observable<any> {
    return this.http.get(environment.urlBackEndSolicitudUSB+'personas').map(this.extractData);
  }

  estadosSolicitud(): Observable<any> {
    return this.http.get(environment.urlBackEndSolicitudUSB+'estados').map(this.extractData);
  }

  registrarRevisiones(data:any){
    return this.http.post(environment.urlBackEndSolicitudUSB+'revisiones/nueva', data);//.map(this.extractData);//.catch(this.handleError);
  }

  listadoHistorico(): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'solicitudes/vistas').map(this.extractData);//.catch(this.handleError);
  }

  vistasDetalladas(): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'solicitudes/vistasdetalladas').map(this.extractData);//.catch(this.handleError);
  }

  obtieneDatosEstadisticosEdad(parametro: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/solicporedad/'+parametro).map(this.extractData);
  }

  obtieneDatosEstadisticosPorContexto(parametro: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/solicporcontexto/'+parametro).map(this.extractData);
  }


  obtieneSolicitudesPorVencer(parametro: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'notificaciones/personas/'+parametro).map(this.extractData);
  }


  generarReporte(parametro: any): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas/pdf/externos/'+parametro).map(this.extractData);
  }

  generarReporteInterno(parametro: any): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas/pdf/internos/'+parametro).map(this.extractData);
  }

  generarReporteCasosInternoExterno(parametro: any): Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'registradas/pdf/internos/'+parametro).map(this.extractData);
  }

  obtieneDatosEstadisticosC():Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'reportes/solicporcontexto/').map(this.extractData);
  }

  obtieneDatosEstadisticosD(parameter: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'solicitudes/agregado/'+parameter).map(this.extractData);
  }


  obtieneDatosEstadisticosE(parameter: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'solicitudes/agregadoExterno/'+parameter).map(this.extractData);
  }


  cambioPassword(data: any): Observable <any> {
    return this.http.post(environment.urlBackEndSolicitudUSB + 'auth/passwd', data).map(this.extractData).pipe(catchError(this.handleError));
  }

  obtieneDatosPersona(parameter: any):Observable<any>{
    return this.http.get(environment.urlBackEndSolicitudUSB+'personas/informacion/'+parameter).map(this.extractData).pipe(catchError(this.handleError));
  }




  private extractData(res: Response) {
    let body = res;
    return body || {};
    //console.log(body)
  }

  private handleError(error: any) {
    if (error instanceof  HttpErrorResponse){
    }
    console.info('Error Message:', error.status);
    return throwError(error.message);
  }
}
