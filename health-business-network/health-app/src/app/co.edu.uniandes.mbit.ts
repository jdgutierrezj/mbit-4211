import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace co.edu.uniandes.mbit{
   export abstract class Persona extends Participant {
      numeroDocumento: string;
      nombre: string;
      apellidos: string;
      fechaNacimiento: Date;
      genero: string;
   }
   export class Cirujano extends Persona {
      procedimientos: ProcedimientoQuirigico[];
      estudios: Estudio[];
      empleos: Empleo[];
   }
   export class Paciente extends Persona {
      procedimientos: ProcedimientoQuirigico[];
   }
   export class Estudio extends Asset {
      id: string;
      tipo: TipoEstudio;
      universidad: Universidad;
   }
   export class Universidad extends Asset {
      id: string;
      nombre: string;
   }
   export class Empleo extends Asset {
      id: string;
      fechaInicio: Date;
      fechaFin: Date;
      empresa: Empresa;
   }
   export class Empresa extends Asset {
      id: string;
      nombre: string;
   }
   export class ProcedimientoQuirigico extends Asset {
      idProcedimiento: string;
      tipo: TipoProcedimiento;
      resultado: ResultadoProcedimiento;
      complejidad: Complejidad;
      fechaProcedimiento: Date;
   }
   export enum TipoEstudio {
      PREGRADO,
      ESPECIALIZACION,
      MAESTRIA,
      DOCTORADO,
      DIPLOMADO,
      CURSO,
      CONGRESOO,
   }
   export enum TipoProcedimiento {
      APENDICITIS,
      LAPAROSCOPIA,
      BARIATRICA,
      CARDIOVASCULAR,
      GENERAL,
      NEUROCIRUGIA,
   }
   export enum ResultadoProcedimiento {
      EXITOSO,
      FALLIDO,
   }
   export enum Complejidad {
      BAJA,
      MEDIA,
      ALTA,
   }
   export class RegistrarCirugia extends Transaction {
      procedimiento: ProcedimientoQuirigico;
      cirujano: Cirujano;
      paciente: Paciente;
   }
   export class RegistrarEmpleo extends Transaction {
      cirujano: Cirujano;
      empleo: Empleo;
   }
   export class RegistrarEstudio extends Transaction {
      cirujano: Cirujano;
      estudio: Estudio;
   }
// }
