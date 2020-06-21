import { Component, OnInit, Output, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SalariuService } from 'src/app/shared/salariu.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit, AfterViewInit  {

  scutireImpozit: boolean = false;
  functieDeBaza: boolean = true;

  persoaneIntretinere = [
    { id: 0, label: "Fara persoane in intretinere" },
    { id: 1, label: "O persoana" },
    { id: 2, label: "Doua persoane" },
    { id: 3, label: "Trei persoane" },
    { id: 4, label: "Patru persoane sau mai multe" }
  ]

  persoanaDefault: number = 0;
  
  constructor(private router: Router, private salariuService: SalariuService, private cdr: ChangeDetectorRef) {
  }
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
  }

  salveazaOptiuneImpzoit(valoare: boolean) {
    this.scutireImpozit = valoare;
  }

  salveazaFunctieDeBaza(valoare: boolean) {
    this.functieDeBaza = !valoare;
  }

  transmiteSalariu(formSalariu: NgForm){
    this.scutireImpozit == true ? this.salariuService.modificaSalariu(formSalariu.value.salariu, formSalariu.value.numarPersoaneIntretinere, this.scutireImpozit)
                                : this.salariuService.modificaSalariu(formSalariu.value.salariu, formSalariu.value.numarPersoaneIntretinere);
    this.router.navigateByUrl('/detalii-salariu');
  }
}
