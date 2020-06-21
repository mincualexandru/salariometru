import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Domeniu } from 'src/app/shared/domeniu.model';
import data from '../../shared/domenii-salarii.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-salary-post',
  templateUrl: './salary-post.component.html',
  styleUrls: ['./salary-post.component.scss']
})
export class SalaryPostComponent implements OnInit {

  selectareDomeniu: boolean = false;

  domeniuSelectat: Domeniu;

  domenii: Domeniu[] = [];

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    const domeniiJSON = Object.values(data.listaDomenii);
    this.domenii = domeniiJSON;
  }

  vizualizareFunctii(domeniu: Domeniu) {
    this.selectareDomeniu = true;
    this.domeniuSelectat = domeniu;
  }
}
