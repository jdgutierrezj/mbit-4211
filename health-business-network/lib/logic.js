'use strict'
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Registrar cirugia
 * @param {co.edu.uniandes.mbit.RegistrarCirugia} txCirugia
 * @transaction
 */
function registrarProcedimiento(txCirugia) {
	var procedimiento = txCirugia.procedimiento;
  	var cirujano = txCirugia.cirujano;
  	var paciente = txCirugia.paciente;
    cirujano.procedimientos.push(procedimiento);
    paciente.procedimientos.push(procedimiento);
    return getParticipantRegistry('co.edu.uniandes.mbit.Cirujano')
        .then(function (cirujanoRegistro) {
            return cirujanoRegistro.update(cirujano);
        }).then(function () {
      		return getParticipantRegistry('co.edu.uniandes.mbit.Paciente')
    	}).then(function (pacienteRegistro) {
            return pacienteRegistro.update(paciente);
        });
}

/**
 * Registrar empleo
 * @param {co.edu.uniandes.mbit.RegistrarEmpleo} txEmpleo
 * @transaction
 */
function registrarEmpleo(txEmpleo) {
	var empleo = txEmpleo.empleo;
  	var cirujano = txEmpleo.cirujano;
  	
    cirujano.empleos.push(empleo);
    
    return getParticipantRegistry('co.edu.uniandes.mbit.Cirujano')
        .then(function (cirujanoRegistro) {
            return cirujanoRegistro.update(cirujano);
        });
}

/**
 * Registrar cirugia
 * @param {co.edu.uniandes.mbit.RegistrarEstudio} txEstudio
 * @transaction
 */
function registrarEstudio(txEstudio) {
	var estudio = txEstudio.estudio;
  	var cirujano = txEstudio.cirujano;
  	
    cirujano.estudios.push(estudio);
    
    return getParticipantRegistry('co.edu.uniandes.mbit.Cirujano')
        .then(function (cirujanoRegistro) {
            return cirujanoRegistro.update(cirujano);
        });
}