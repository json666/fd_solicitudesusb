import {RemExterno} from './rem-externo';
import {RegDestinatario} from './reg-destinatario';
import {RegSolicitud} from './reg-solicitud';
import {DetSolicitud} from './det-solicitud';

export class RegistroSolicitud {
  tarea: string;
  tipoTareaId: number;
  solicitud: RegSolicitud;
  remExterno: RemExterno;
  destinatario: RegDestinatario;
  detallesSolicitud: DetSolicitud;

}
