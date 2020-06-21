import { Component, OnInit } from '@angular/core';
import { Salariu } from 'src/app/shared/salariu.model';
import { SalariuService } from 'src/app/shared/salariu.service';

@Component({
  selector: 'app-istoric-salarii',
  templateUrl: './istoric-salarii.component.html',
  styleUrls: ['./istoric-salarii.component.scss']
})
export class IstoricSalariiComponent implements OnInit {

  salarii: Salariu[] = new Array<Salariu>();

  constructor(private salariuService: SalariuService) { }

  ngOnInit() {
    this.salarii = this.salariuService.getAll();
  }

}
