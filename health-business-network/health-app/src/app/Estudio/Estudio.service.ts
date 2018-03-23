import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Estudio } from '../co.edu.uniandes.mbit';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class EstudioService {

	
		private NAMESPACE: string = 'Estudio';
	



    constructor(private dataService: DataService<Estudio>) {
    };

    public getAll(): Observable<Estudio[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Estudio> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Estudio> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Estudio> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Estudio> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
