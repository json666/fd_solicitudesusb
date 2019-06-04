import {Parametrica} from './parametrica';
import {Solicitante} from './solicitante';
import {Destinatario} from './destinatario';
import {Dominio} from './dominio';

export class Solicitud {

  id: number;
  solicitante: Solicitante;
  destinatario: Destinatario;
  referencia: string;
  tipDocSolicitud: Dominio = new Dominio();
  nroHojas: string;
  fecReg: string;
  requerimiento: string;
  analisis: string;
  recomendaciones: string;
  remision: string;
  observaciones: string;
  conclusion: string;
  estado: Parametrica = new Parametrica();
  tsolicId: string;
  solicCite: string;
  hojaRuta: string;
  soliRef: string;
  taccion: Dominio = new Dominio();
  limite: Date;




}
