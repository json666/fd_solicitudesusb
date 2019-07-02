import {Parametrica} from './parametrica';
import {Dominio} from './dominio';

export class Solicitante {

  id: number;
  nombre: string;
  paterno: string;
  materno: string;
  ci: string;
  tipDoc: Parametrica = new Parametrica();
  fono: string;
  fono1: string;
  celular: string;
  direccion: string;
  email: string;
  sexo: Dominio = new Dominio();
  abrev: string;
  juridico: boolean;
  genero: string;
  edad: number;
  telefono: string;

}
