import {RegSolicitud} from './reg-solicitud';
import {RemExterno} from './rem-externo';
import {RegDestinatario} from './reg-destinatario';
import {RemInterno} from './rem-interno';
import {Revisiones} from './revisiones';

export class RegistroInterno {

  tarea: string;
  tipoTareaId: number;
  solicitud: RegSolicitud;
  remInterno: RemInterno;
  destinatario: RegDestinatario;
  revisiones: Revisiones[];
  remExterno: RemExterno;
}

