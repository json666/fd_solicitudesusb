import {Solicitante} from './solicitante';
import {Destinatario} from './destinatario';
import {Solicitud} from './solicitud';
import {Parametrica} from './parametrica';
import {Dominio} from './dominio';

export class Solicitudes {
  id: number;
  solicitud: Solicitud;
  solicitante: Solicitante;
  destinatario: Destinatario;
  tarea: Parametrica = new Parametrica();
  caso: Dominio = new Dominio();


}
