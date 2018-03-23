import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmpleoService } from './Empleo.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Empleo',
	templateUrl: './Empleo.component.html',
	styleUrls: ['./Empleo.component.css'],
  providers: [EmpleoService]
})
export class EmpleoComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          fechaInicio = new FormControl("", Validators.required);
        
  
      
          fechaFin = new FormControl("", Validators.required);
        
  
      
          empresa = new FormControl("", Validators.required);
        
  


  constructor(private serviceEmpleo:EmpleoService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          fechaInicio:this.fechaInicio,
        
    
        
          fechaFin:this.fechaFin,
        
    
        
          empresa:this.empresa
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceEmpleo.getAll()
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
      $class: "co.edu.uniandes.mbit.Empleo",
      
        
          "id":this.id.value,
        
      
        
          "fechaInicio":this.fechaInicio.value,
        
      
        
          "fechaFin":this.fechaFin.value,
        
      
        
          "empresa":this.empresa.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "fechaInicio":null,
        
      
        
          "fechaFin":null,
        
      
        
          "empresa":null
        
      
    });

    return this.serviceEmpleo.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "fechaInicio":null,
        
      
        
          "fechaFin":null,
        
      
        
          "empresa":null 
        
      
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
      $class: "co.edu.uniandes.mbit.Empleo",
      
        
          
        
    
        
          
            "fechaInicio":this.fechaInicio.value,
          
        
    
        
          
            "fechaFin":this.fechaFin.value,
          
        
    
        
          
            "empresa":this.empresa.value
          
        
    
    };

    return this.serviceEmpleo.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceEmpleo.deleteAsset(this.currentId)
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

    return this.serviceEmpleo.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "fechaInicio":null,
          
        
          
            "fechaFin":null,
          
        
          
            "empresa":null 
          
        
      };



      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.fechaInicio){
          
            formObject.fechaInicio = result.fechaInicio;
          
        }else{
          formObject.fechaInicio = null;
        }
      
        if(result.fechaFin){
          
            formObject.fechaFin = result.fechaFin;
          
        }else{
          formObject.fechaFin = null;
        }
      
        if(result.empresa){
          
            formObject.empresa = result.empresa;
          
        }else{
          formObject.empresa = null;
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
      
        
          "id":null,
        
      
        
          "fechaInicio":null,
        
      
        
          "fechaFin":null,
        
      
        
          "empresa":null 
        
      
      });
  }

}
