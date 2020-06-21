import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salary-card',
  templateUrl: './salary-card.component.html',
  styleUrls: ['./salary-card.component.scss']
})
export class SalaryCardComponent implements OnInit {

  @Input() impozitVenit: number;
  @Input() salariuBrut: number;
  @Input() salariuNet: number;
  @Input() asigurareSociala: number;
  @Input() asigurareSanatate: number;

  constructor() { }

  ngOnInit() {
  }

}
