import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Totalcasos} from '../model/reports/totalcasos';
import {VistaEstados} from '../model/vista-estados';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  total: any;
  totalcasos: Totalcasos[];
  interno: number;
  externo: number;
  data1: any;
  options2: any;
  validaRep = false;
  estados: VistaEstados[];

  data4: any;

  constructor(private _serv: CorrespondenciaService) {
  }

  ngOnInit() {

    let dt = new Date();
    /*this._serv.obtieneDatosEstadisticosEdad(dt.getFullYear()).subscribe(response => {
      this.data1 = response;
    });*/
    this._serv.obtieneTotal().subscribe(response1 => {
      this.total = response1.total;
    });

    this._serv.obtieneTotalCasos().subscribe(response1 => {
      this.totalcasos = response1;
        this.interno = this.totalcasos[0].count !== undefined ? this.totalcasos[0].count : 0;
        this.externo = this.totalcasos[1].count !== undefined ? this.totalcasos[1].count : 0;
    });
    this._serv.obtieneDatosEstadisticosD(dt.getFullYear()).subscribe(response1 => {
      this.estados = response1;
    });

    this._serv.obtieneDatosEstadisticosC().subscribe(response => {
      this.data1 = response;

    });

    this.options2 = {
      title: {
        display: true,
        text: 'Casos atendidos por gestion.',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };



/*    this.data = {
      datasets: [{
        data: [
          10,
          20,
          50,
          80,
          100
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset'
      }],
      labels: [
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    };*/
  }

}
