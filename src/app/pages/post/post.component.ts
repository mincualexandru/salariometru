import { Component, OnInit } from '@angular/core';
import { DomeniuFunctiiService } from 'src/app/shared/domenii-salarii.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Functie } from 'src/app/shared/domeniu.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  functie: Functie;
  functii: Functie[];

  constructor(private route: ActivatedRoute, private domeniuFunctii: DomeniuFunctiiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let numeFunctie = params.post;
      let numeDomeniu = params.domeniu;
      this.functie = this.domeniuFunctii.gasesteFunctie(numeFunctie, numeDomeniu);
      this.functii = this.domeniuFunctii.eliminaFunctie(numeDomeniu, numeFunctie);
      this.domeniuFunctii.sortareFunctiiIntervalSalarial(this.functii);
    })


    //Adaugare functionalitate :
    // sortare functii in functie de intervalul salarial(deja implementata)
    // gasire functie curenta si aflare index si afisarea acestuia
    // pentru gasirea locului situat in lista locurilor de munca aferente domeniului
  }

}
