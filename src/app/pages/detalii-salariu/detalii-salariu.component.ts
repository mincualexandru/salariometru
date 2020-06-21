import { Component, OnInit } from '@angular/core';
import { SalariuService } from 'src/app/shared/salariu.service';
import { Salariu } from 'src/app/shared/salariu.model';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

export interface DeduceriPersonale {
  inceputSalariu: number;
  sfarsitSalariu: number;
  persoana0: number;
  persoana1: number;
  persoana2: number;
  persoana3: number;
  persoana4: number;
}

@Component({
  selector: 'app-detalii-salariu',
  templateUrl: './detalii-salariu.component.html',
  styleUrls: ['./detalii-salariu.component.scss']
})
export class DetaliiSalariuComponent implements OnInit {

  salariu: Salariu;
  taxeAngajat: number = 0;
  taxeAngajator: number = 0;


  grilaSalarizare: Array<DeduceriPersonale> = [
    {inceputSalariu: 1, sfarsitSalariu: 1950, persoana0: 510, persoana1: 670, persoana2: 830, persoana3: 990, persoana4: 1310}, 
    {inceputSalariu: 1951, sfarsitSalariu: 2000, persoana0: 495, persoana1: 655, persoana2: 815, persoana3: 975, persoana4: 1295},
    {inceputSalariu: 2001, sfarsitSalariu: 2050, persoana0: 480, persoana1: 640, persoana2: 800, persoana3: 960, persoana4: 1280}, 
    {inceputSalariu: 2051, sfarsitSalariu: 2100, persoana0: 465, persoana1: 625, persoana2: 785, persoana3: 945, persoana4: 1265},
    {inceputSalariu: 2101, sfarsitSalariu: 2150, persoana0: 450, persoana1: 610, persoana2: 770, persoana3: 930, persoana4: 1250}, 
    {inceputSalariu: 2151, sfarsitSalariu: 2200, persoana0: 435, persoana1: 595, persoana2: 755, persoana3: 915, persoana4: 1235},
    {inceputSalariu: 2201, sfarsitSalariu: 2250, persoana0: 420, persoana1: 580, persoana2: 740, persoana3: 900, persoana4: 1220}, 
    {inceputSalariu: 2251, sfarsitSalariu: 2300, persoana0: 405, persoana1: 565, persoana2: 725, persoana3: 885, persoana4: 1205},
    {inceputSalariu: 2301, sfarsitSalariu: 2350, persoana0: 390, persoana1: 550, persoana2: 710, persoana3: 870, persoana4: 1190}, 
    {inceputSalariu: 2351, sfarsitSalariu: 2400, persoana0: 375, persoana1: 535, persoana2: 695, persoana3: 855, persoana4: 1175},
    {inceputSalariu: 2401, sfarsitSalariu: 2450, persoana0: 360, persoana1: 520, persoana2: 680, persoana3: 840, persoana4: 1160}, 
    {inceputSalariu: 2451, sfarsitSalariu: 2500, persoana0: 345, persoana1: 505, persoana2: 665, persoana3: 825, persoana4: 1145},
    {inceputSalariu: 2501, sfarsitSalariu: 2550, persoana0: 330, persoana1: 490, persoana2: 650, persoana3: 810, persoana4: 1130},
    {inceputSalariu: 2551, sfarsitSalariu: 2600, persoana0: 315, persoana1: 475, persoana2: 635, persoana3: 795, persoana4: 1115}, 
    {inceputSalariu: 2601, sfarsitSalariu: 2650, persoana0: 300, persoana1: 460, persoana2: 620, persoana3: 780, persoana4: 1100},
    {inceputSalariu: 2651, sfarsitSalariu: 2700, persoana0: 285, persoana1: 445, persoana2: 605, persoana3: 765, persoana4: 1085}, 
    {inceputSalariu: 2701, sfarsitSalariu: 2750, persoana0: 270, persoana1: 430, persoana2: 590, persoana3: 750, persoana4: 1070},
    {inceputSalariu: 2751, sfarsitSalariu: 2800, persoana0: 255, persoana1: 415, persoana2: 575, persoana3: 735, persoana4: 1055}, 
    {inceputSalariu: 2801, sfarsitSalariu: 2850, persoana0: 240, persoana1: 400, persoana2: 560, persoana3: 720, persoana4: 1040},
    {inceputSalariu: 2851, sfarsitSalariu: 2900, persoana0: 225, persoana1: 385, persoana2: 545, persoana3: 705, persoana4: 1025}, 
    {inceputSalariu: 2901, sfarsitSalariu: 2950, persoana0: 210, persoana1: 370, persoana2: 530, persoana3: 690, persoana4: 1010},
    {inceputSalariu: 2951, sfarsitSalariu: 3000, persoana0: 195, persoana1: 355, persoana2: 515, persoana3: 675, persoana4: 995}, 
    {inceputSalariu: 3001, sfarsitSalariu: 3050, persoana0: 180, persoana1: 340, persoana2: 500, persoana3: 660, persoana4: 980},
    {inceputSalariu: 3051, sfarsitSalariu: 3100, persoana0: 165, persoana1: 325, persoana2: 485, persoana3: 645, persoana4: 965}, 
    {inceputSalariu: 3101, sfarsitSalariu: 3150, persoana0: 150, persoana1: 310, persoana2: 470, persoana3: 630, persoana4: 950},
    {inceputSalariu: 3151, sfarsitSalariu: 3200, persoana0: 135, persoana1: 295, persoana2: 455, persoana3: 615, persoana4: 935}, 
    {inceputSalariu: 3201, sfarsitSalariu: 3250, persoana0: 120, persoana1: 280, persoana2: 440, persoana3: 600, persoana4: 920},
    {inceputSalariu: 3251, sfarsitSalariu: 3300, persoana0: 105, persoana1: 265, persoana2: 425, persoana3: 585, persoana4: 905}, 
    {inceputSalariu: 3301, sfarsitSalariu: 3350, persoana0: 90, persoana1: 250, persoana2: 410, persoana3: 570, persoana4: 890},
    {inceputSalariu: 3351, sfarsitSalariu: 3400, persoana0: 75, persoana1: 235, persoana2: 395, persoana3: 555, persoana4: 875}, 
    {inceputSalariu: 3401, sfarsitSalariu: 3450, persoana0: 60, persoana1: 220, persoana2: 380, persoana3: 540, persoana4: 860},
    {inceputSalariu: 3451, sfarsitSalariu: 3500, persoana0: 45, persoana1: 205, persoana2: 365, persoana3: 525, persoana4: 845}, 
    {inceputSalariu: 3501, sfarsitSalariu: 3550, persoana0: 30, persoana1: 190, persoana2: 350, persoana3: 510, persoana4: 830},
    {inceputSalariu: 3551, sfarsitSalariu: 3600, persoana0: 15, persoana1: 175, persoana2: 335, persoana3: 495, persoana4: 815}
  ];

  constructor(private salariuService: SalariuService) { }

  ngOnInit() {
    this.salariu = new Salariu();
    this.salariuService.salariuCurent.subscribe(({salariu, persoaneIntretinere, scutitImpozit}) => {
        scutitImpozit == true ? this.createSalary(salariu, persoaneIntretinere, scutitImpozit) : this.createSalary(salariu, persoaneIntretinere);
    });
    this.createChart();
    this.salariuService.adaugaSalariu(this.salariu);
  }

  procentaj(valoare: number, procent: number) {
    return valoare*procent/100;
  }

  createSalary(salariu: number, numarPersoaneIntretinere: number, scutitImpozit?: boolean) {
    if(salariu >= 1 && salariu <= 3600) {
      let salariuGrilaSalarizare = this.grilaSalarizare.filter(element => {
        if(salariu >= element.inceputSalariu && salariu <= element.sfarsitSalariu) {
          return true;
        }
        return false;
      })[0];
      this.salariu.deducerePersonala = salariuGrilaSalarizare['persoana'+numarPersoaneIntretinere];
      this.calculateSalary(salariu, scutitImpozit);
    } else {
      this.salariu.deducerePersonala = 0;
      scutitImpozit == true ? this.calculateSalary(salariu, scutitImpozit) : this.calculateSalary(salariu);
    }
  }

  calculateSalary(salariu: number, scutitImpozit?: boolean) {
    this.salariu.salariuBrut = salariu;
    this.salariu.asigurareSociala = Math.round(this.procentaj(this.salariu.salariuBrut, 25));
    this.salariu.asigurareSanatate = Math.round(this.procentaj(this.salariu.salariuBrut, 10));
    
    let impozit = Math.round(this.procentaj((this.salariu.salariuBrut - this.salariu.asigurareSociala - this.salariu.asigurareSanatate - this.salariu.deducerePersonala),10));
    
    this.salariu.impozitVenit = scutitImpozit == true ? 0 : impozit > 0 ? impozit : 0;
    this.salariu.salariuNet = this.salariu.salariuBrut - this.salariu.asigurareSociala - this.salariu.asigurareSanatate - this.salariu.impozitVenit;
    this.salariu.asigurareMunca = Math.round(this.procentaj(this.salariu.salariuBrut, 2.25));
    this.taxeAngajat = this.salariu.asigurareSociala + this.salariu.asigurareSanatate + this.salariu.impozitVenit;
    this.taxeAngajator = this.salariu.asigurareMunca;
    this.salariu.salariuComplet = this.salariu.salariuBrut + this.taxeAngajator;

  }

  createChart() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      backgroundColor: "#e6ffff",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Statistici Salariu"
      },
      toolbar: {
        backgroundColor: "#e6ffff"
      },
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: {y} lei (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.salariu.salariuBrut, name: "Salariu Brut" },
          { y: this.salariu.salariuNet, name: "Salariu Net" },
          { y: this.salariu.asigurareSanatate, name: "Asigurare Sanatate" },
          { y: this.salariu.asigurareSociala, name: "Asigurare Sociala" },
          { y: this.salariu.impozitVenit, name: "Impozit Venit"}
        ]
      }]
    });
      
    chart.render();
  }
}
