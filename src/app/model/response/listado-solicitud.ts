import {RespSolicitud} from './resp-solicitud';
import {RemExterno} from '../rem-externo';
import {RemInterno} from '../rem-interno';
import {RemDestinatario} from '../rem-destinatario';
import {DetSolicitud} from '../det-solicitud';

export class ListadoSolicitud {

  solicitud: RespSolicitud;
  remExterno: RemExterno;
  remInterno: RemInterno;
  destinatario:  RemDestinatario;
  detalleSolicitud: DetSolicitud;
  tarea: string;
  tipoTareaId: number;
  nombreCorto: string;
  nombreLargo: string;



}
