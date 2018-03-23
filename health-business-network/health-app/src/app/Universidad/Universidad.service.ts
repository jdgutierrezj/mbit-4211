import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Universidad } from '../co.edu.uniandes.mbit';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class UniversidadService {

	
		private NAMESPACE: string = 'Universidad';
	



    constructor(private dataService: DataService<Universidad>) {
    };

    public getAll(): Observable<Universidad[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Universidad> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Universidad> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Universidad> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Universidad> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
