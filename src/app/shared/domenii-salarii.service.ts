import { Injectable } from "@angular/core";
import { Salariu } from "./salariu.model";
import data from "../shared/domenii-salarii.json";
import { Domeniu, Functie } from './domeniu.model';

@Injectable()
export class DomeniuFunctiiService {
    
  domenii: any = Object.values(data.listaDomenii);

  gasesteFunctie(numeFunctie: string, numeDomeniu: string): Functie {
    return this.gasesteDomeniu(numeDomeniu).functii.filter(functie => {
      if (numeFunctie === this.modicareNumeFunctie(functie.nume)) {
        return functie;
      }
    })[0];
  }

  gasesteDomeniu(numeDomeniu: string): Domeniu {
    return this.domenii.filter(domeniu => {
        if (domeniu.nume.toLowerCase() == numeDomeniu) {
          return domeniu;
        }
      })[0];
  }

  gasesteFunctii(numeDomeniu: string): Functie[] {
    return this.gasesteDomeniu(numeDomeniu).functii;
  }

  gasesteCinciFunctiiRandom(functii: Functie[]): Functie[] {
    let functiiSortate = functii.sort(() => 0.5 - Math.random());
    return functiiSortate.slice(0, 5);
  }

  modicareNumeFunctie(functie: string): string {
    functie = functie.toLowerCase().trim();
    let cuvinte: string[] = functie.split(" ");
    return (functie = cuvinte.join("-"));
  }

  eliminaFunctie(domeniu: string, functie: string): Functie[] {
    let functii2 = this.gasesteFunctii(domeniu);
    functii2.forEach((item, index) => {
      if(functie === this.modicareNumeFunctie(item.nume)) {
        functii2.splice(index, 1);
      }
    });
    return this.gasesteCinciFunctiiRandom(functii2);
  }

  sortareFunctiiIntervalSalarial(functii: Functie[]) {
    functii.sort((a, b) => a.intervalSalariu.deLa < b.intervalSalariu.deLa ? -1 : a.intervalSalariu.deLa > b.intervalSalariu.deLa ? 1 : 0);
  }
}
