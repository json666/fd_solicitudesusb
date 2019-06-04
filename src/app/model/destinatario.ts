import {Parametrica} from './parametrica';

export class Destinatario {

  id: number;
  nombre: string;
  paterno: string;
  materno: string;
  cargo: Parametrica = new Parametrica();
  esEmpleado: string;
  unidad: Parametrica = new Parametrica();
  nroDoc: string;
  correo: string;

}
