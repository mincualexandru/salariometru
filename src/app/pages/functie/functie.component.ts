import { Component, OnInit, Input } from '@angular/core';
import { Domeniu } from 'src/app/shared/domeniu.model';
import { DomeniuFunctiiService } from 'src/app/shared/domenii-salarii.service';

@Component({
  selector: 'app-functie',
  templateUrl: './functie.component.html',
  styleUrls: ['./functie.component.scss']
})
export class FunctieComponent implements OnInit {

  @Input() domeniu: Domeniu;

  constructor(private domeniuFunctiiService: DomeniuFunctiiService) { }

  ngOnInit() {
  }

  modicareNumeFunctie(functie: string): string {
    return this.domeniuFunctiiService.modicareNumeFunctie(functie);
  }
}
