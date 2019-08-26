import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Totalcasos} from '../model/reports/totalcasos';
import {VistaEstados} from '../model/vista-estados';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';

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
  estadosExterno: VistaEstados[];

  data4: any;

  public lineChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}//,
    // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private _serv: CorrespondenciaService) {
  }

  ngOnInit() {

    let dt = new Date();
    this._serv.obtieneTotal().subscribe(response1 => {
      this.total = response1.total;
    });

    this._serv.obtieneTotalCasos().subscribe(response1 => {
      console.info('====' + JSON.stringify(response1));

      this.totalcasos = response1;
      console.info('I====' + JSON.stringify(this.totalcasos[0]));
      console.info('E====' + JSON.stringify(this.totalcasos[1]));
      if (this.totalcasos[0] !== undefined) {
        if (this.totalcasos[0].count !== undefined) {
          this.interno = this.totalcasos[0].count;
        } else {
          this.interno = 0;
        }
      } else {
        this.interno = 0;
      }
      if (this.totalcasos[1] !== undefined) {
        if (this.totalcasos[1].count !== undefined) {
          this.externo = this.totalcasos[1].count;
        } else {
          this.externo = 0;
        }
      } else {
        this.externo = 0;
      }
      // this.interno = this.totalcasos[0].count !== undefined ? this.totalcasos[0].count : 0;
      // this.externo = this.totalcasos[1].count !== undefined ? this.totalcasos[1].count : 0;
    });
    this._serv.obtieneDatosEstadisticosD(dt.getFullYear()).subscribe(response1 => {
      this.estados = response1;
    });
    /**Agregados Extenos*/
    this._serv.obtieneDatosEstadisticosE(dt.getFullYear()).subscribe(response1 => {
      this.estadosExterno = response1;
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

  }

}
