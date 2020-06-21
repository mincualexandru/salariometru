import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Salariu } from './salariu.model';

export interface PersoanaSalariu {
    salariu: number;
    persoaneIntretinere: number;
    scutitImpozit?: boolean;
}

@Injectable()
export class SalariuService {

    salarii: Salariu[] = new Array<Salariu>();

    private sursaSalariu = new BehaviorSubject<PersoanaSalariu>({
        salariu: 1,
        persoaneIntretinere: 1,
        scutitImpozit: false
    });

    salariuCurent = this.sursaSalariu.asObservable();

    modificaSalariu(salariu: number, persoaneIntretinere: number, scutitImpozit?: boolean){ 
        this.sursaSalariu.next({salariu, persoaneIntretinere, scutitImpozit});
    }

    getAll() {
        return this.salarii;
    }
    
    adaugaSalariu(salariu: Salariu) {
        this.salarii.push({...salariu});
    }
}