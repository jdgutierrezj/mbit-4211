import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Empresa } from '../co.edu.uniandes.mbit';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class EmpresaService {

	
		private NAMESPACE: string = 'Empresa';
	



    constructor(private dataService: DataService<Empresa>) {
    };

    public getAll(): Observable<Empresa[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Empresa> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Empresa> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Empresa> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Empresa> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
