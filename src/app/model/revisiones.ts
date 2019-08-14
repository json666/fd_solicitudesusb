import {Persona} from './persona';
import {Dominio} from './dominio';
import {Estados} from './estados';

export class Revisiones {
    id: number;
    solicId: number;
    desc: string;
    fecha: number;
    idEsolic: number;
    idPersona: number;
    idTipoTarea: number;
    nombre: string;
    personas: Persona;
    accion: Dominio;
    estado: Estados;
    nombrePersona: string;
}
