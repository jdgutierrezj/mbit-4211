import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProcedimientoQuirigicoService } from './ProcedimientoQuirigico.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ProcedimientoQuirigico',
	templateUrl: './ProcedimientoQuirigico.component.html',
	styleUrls: ['./ProcedimientoQuirigico.component.css'],
  providers: [ProcedimientoQuirigicoService]
})
export class ProcedimientoQuirigicoComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          idProcedimiento = new FormControl("", Validators.required);
        
  
      
          tipo = new FormControl("", Validators.required);
        
  
      
          resultado = new FormControl("", Validators.required);
        
  
      
          complejidad = new FormControl("", Validators.required);
        
  
      
          fechaProcedimiento = new FormControl("", Validators.required);
        
  


  constructor(private serviceProcedimientoQuirigico:ProcedimientoQuirigicoService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          idProcedimiento:this.idProcedimiento,
        
    
        
          tipo:this.tipo,
        
    
        
          resultado:this.resultado,
        
    
        
          complejidad:this.complejidad,
        
    
        
          fechaProcedimiento:this.fechaProcedimiento
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceProcedimientoQuirigico.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "co.edu.uniandes.mbit.ProcedimientoQuirigico",
      
        
          "idProcedimiento":this.idProcedimiento.value,
        
      
        
          "tipo":this.tipo.value,
        
      
        
          "resultado":this.resultado.value,
        
      
        
          "complejidad":this.complejidad.value,
        
      
        
          "fechaProcedimiento":this.fechaProcedimiento.value
        
      
    };

    this.myForm.setValue({
      
        
          "idProcedimiento":null,
        
      
        
          "tipo":null,
        
      
        
          "resultado":null,
        
      
        
          "complejidad":null,
        
      
        
          "fechaProcedimiento":null
        
      
    });

    return this.serviceProcedimientoQuirigico.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "idProcedimiento":null,
        
      
        
          "tipo":null,
        
      
        
          "resultado":null,
        
      
        
          "complejidad":null,
        
      
        
          "fechaProcedimiento":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "co.edu.uniandes.mbit.ProcedimientoQuirigico",
      
        
          
        
    
        
          
            "tipo":this.tipo.value,
          
        
    
        
          
            "resultado":this.resultado.value,
          
        
    
        
          
            "complejidad":this.complejidad.value,
          
        
    
        
          
            "fechaProcedimiento":this.fechaProcedimiento.value
          
        
    
    };

    return this.serviceProcedimientoQuirigico.updateAsset(form.get("idProcedimiento").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceProcedimientoQuirigico.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceProcedimientoQuirigico.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "idProcedimiento":null,
          
        
          
            "tipo":null,
          
        
          
            "resultado":null,
          
        
          
            "complejidad":null,
          
        
          
            "fechaProcedimiento":null 
          
        
      };



      
        if(result.idProcedimiento){
          
            formObject.idProcedimiento = result.idProcedimiento;
          
        }else{
          formObject.idProcedimiento = null;
        }
      
        if(result.tipo){
          
            formObject.tipo = result.tipo;
          
        }else{
          formObject.tipo = null;
        }
      
        if(result.resultado){
          
            formObject.resultado = result.resultado;
          
        }else{
          formObject.resultado = null;
        }
      
        if(result.complejidad){
          
            formObject.complejidad = result.complejidad;
          
        }else{
          formObject.complejidad = null;
        }
      
        if(result.fechaProcedimiento){
          
            formObject.fechaProcedimiento = result.fechaProcedimiento;
          
        }else{
          formObject.fechaProcedimiento = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "idProcedimiento":null,
        
      
        
          "tipo":null,
        
      
        
          "resultado":null,
        
      
        
          "complejidad":null,
        
      
        
          "fechaProcedimiento":null 
        
      
      });
  }

}
