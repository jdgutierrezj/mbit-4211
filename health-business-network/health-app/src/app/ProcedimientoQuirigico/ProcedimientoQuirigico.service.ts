import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ProcedimientoQuirigico } from '../co.edu.uniandes.mbit';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ProcedimientoQuirigicoService {

	
		private NAMESPACE: string = 'ProcedimientoQuirigico';
	



    constructor(private dataService: DataService<ProcedimientoQuirigico>) {
    };

    public getAll(): Observable<ProcedimientoQuirigico[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ProcedimientoQuirigico> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ProcedimientoQuirigico> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ProcedimientoQuirigico> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ProcedimientoQuirigico> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
