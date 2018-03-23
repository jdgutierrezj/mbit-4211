import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Empleo } from '../co.edu.uniandes.mbit';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class EmpleoService {

	
		private NAMESPACE: string = 'Empleo';
	



    constructor(private dataService: DataService<Empleo>) {
    };

    public getAll(): Observable<Empleo[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Empleo> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Empleo> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Empleo> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Empleo> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
