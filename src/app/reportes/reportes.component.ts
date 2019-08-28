import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ReporteA} from '../model/reports/reporte-a';
import {ReporteB} from '../model/reports/reporte-b';
import {Parametrica} from '../model/parametrica';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  data: ReporteA;
  data1: ReporteB;
  data3: any;
  data4: any;
  anios: string[] = [];
  pmes: Parametrica = new Parametrica();
  panio: Parametrica = new Parametrica();
  loading = true;
  loading1 = true;
  meses;
  options: any;
  options1: any;
  options2: any;
  options3: any;
  phasta: string;
  pdesde: string;
  today: any;
  dd: string;
  MM: string;
  yyyy: string;
  desde: string;
  hasta: string;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  /*BarChart A*/
  public barChartOptionsC: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabelsC: Label[] = ['Tipo Caso1', 'Tipo Caso2', 'Tipo Caso3', 'Tipo Caso4', 'Tipo Caso5', 'Tipo Caso6', 'Tipo Caso7'];
  public barChartTypeC: ChartType = 'bar';
  public barChartLegendC = true;
  public barChartPluginsC = [pluginDataLabels];
  public barChartColorsC = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,5.3)', 'rgba(0,1,255,0.3)', 'rgba(1,12,255,8.3)', 'rgba(1,12,90,0,3)']
    },
  ];

  public barChartDataC: ChartDataSets[] = [
    // {data: [65, 0, 0, 0, 0, 0, 0], label: 'Tipo Caso1'},
    // {data: [0, 59, 0, 0, 0, 0, 0], label: 'Tipo Caso2'},
    // {data: [0, 0, 80, 0, 0, 0, 0], label: 'Tipo Caso3'},
    // {data: [0, 0, 0, 81, 0, 0, 0], label: 'Tipo Caso4'},
    // {data: [0, 0, 0, 0, 60, 0, 0], label: 'Tipo Caso5'},
    // {data: [0, 0, 0, 0, 0, 90, 0], label: 'Tipo Caso6'},
    // {data: [0, 0, 0, 0, 0, 0, 84], label: 'Tipo Caso7'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Reporte por Tipo de Caso'}
  ];
  /* Chart PIE*/
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public datosPie: any [];
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  constructor(private messageService: MessageService,
              private _serv: CorrespondenciaService) {
    this.data3 = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Mujeres',
          data: [65, 59, 80, 81, 56, 55, 40, 90, 45, 10, 23, 52],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Hombres',
          data: [28, 48, 40, 19, 86, 27, 90, 12, 10, 15, 45, 41],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
  }


  ngOnInit() {
    this.meses = [
      {
        'cod': '1',
        'des': 'ENERO'
      },
      {
        'cod': '2',
        'des': 'FEBRERO'
      },
      {
        'cod': '3',
        'des': 'MARZO'
      },
      {
        'cod': '4',
        'des': 'ABRIL'
      },
      {
        'cod': '5',
        'des': 'MAYO'
      },
      {
        'cod': '6',
        'des': 'JUNIO'
      },
      {
        'cod': '7',
        'des': 'JULIO'
      },
      {
        'cod': '8',
        'des': 'AGOSTO'
      },
      {
        'cod': '9',
        'des': 'SEPTIEMBRE'
      },
      {
        'cod': '10',
        'des': 'OCTUBRE'
      },
      {
        'cod': '11',
        'des': 'NOVIEMBRE'
      },
      {
        'cod': '12',
        'des': 'DICIEMBRE'
      }
    ];
    let dt = new Date();
    /*Datos para generar reporte del Mes actual*/
    this.today = new Date();
    this.dd = String(this.today.getDate() + 1).padStart(2, '0');
    this.MM = String(this.today.getMonth() + 1).padStart(2, '0');
    this.yyyy = this.today.getFullYear();
    this.pdesde = this.yyyy + '-' + this.MM + '-01';
    this.phasta = this.yyyy + '-' + this.MM + '-' + this.dd;
    this._serv.obtieneDatosEstadisticosA(this.pdesde, this.phasta).subscribe(response => {
      this.data = response;
      this.barChartLabels = this.data.labels;
      this.barChartData = [
        {data: this.data.datasets[0].data, label: this.data.datasets[0].label},
        {data: this.data.datasets[1].data, label: this.data.datasets[1].label}
      ];
    });

    this._serv.obtieneDatosEstadisticosB(this.pdesde, this.phasta).subscribe(response => {
      this.data1 = response;
      console.info('Resultado del consumo:' + JSON.stringify(response));
      this.loading = false;
      this.pieChartLabels = this.data1.labels;
      this.pieChartData = this.data1.datasets[0].data;
      this.pieChartColors = [
        {
          backgroundColor: this.data1.datasets[0].backgroundColor
        }
      ];
    });
    this.options = {
      title: {
        display: true,
        text: 'Cantidad de casos Internos/Externos atendidos por mes.',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
    this.options1 = {
      title: {
        display: true,
        text: 'Casos atendidos por tipo de caso',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };

    this.options = {
      title: {
        display: true,
        text: 'Cantidad de casos Internos/Externos atendidos por mes.',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };

    this.options3 = {
      title: {
        display: true,
        text: 'Reporte de casos externos atendidos por genero y por tipo de caso.',
        fontSize: 16
      },
      legend: {
        position: 'above'
      }
    };

    dt = new Date();
    this._serv.obtieneDatosEstadisticosEdad(dt.getFullYear()).subscribe(response => {
      this.data4 = response;
    });

    this.options2 = {
      title: {
        display: true,
        text: 'Casos atendidos por edad.',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }
  actualizarReporteA() {
    this.loading = true;
    let mes;
    let aniio;
    let dt = new Date();
    console.info('MES()=:' + this.pmes.cod + '--' + this.pmes.des);
    if (this.pmes.cod == undefined || this.pmes.cod === '') {
      mes = '';
    } else {
      mes = this.pmes.cod;
    }
    console.info('MES:' + mes);
    if (this.panio.des === undefined || this.panio.des == '') {

      aniio = dt.getFullYear();
    } else {
      aniio = this.panio.des;
    }
    console.info('ANIO:' + aniio);
    this._serv.obtieneDatosEstadisticosA(this.pdesde, this.phasta).subscribe(response => {
      this.data = response;
      this.barChartLabels = this.data.labels;
      this.barChartData = [
        {data: this.data.datasets[0].data, label: this.data.datasets[0].label},
        {data: this.data.datasets[1].data, label: this.data.datasets[1].label}
      ];
    });
    this._serv.obtieneDatosEstadisticosB(this.pdesde, this.phasta).subscribe(response => {
      this.data1 = response;
      console.info('Respues del servicio:' + JSON.stringify(response));
      this.pieChartLabels = this.data1.labels;
      this.pieChartData = this.data1.datasets[0].data;
      console.info('BackgroundColor' + this.data1.datasets[0].backgroundColor);
      this.pieChartColors = [
        {
          backgroundColor: this.data1.datasets[0].backgroundColor
        }
      ];
      this.loading = false;
    });
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, {length: 3}).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  imprimirCasosPorTipoCaso() {
    window.open(environment.urlBackEndSolicitudUSB + 'registradas/pdf/tiposcasos/' + this.pdesde + '/' + this.phasta);
  }

  imprimirCasosInternoExterno() {
    window.open(environment.urlBackEndSolicitudUSB + 'registradas/pdf/casosInternosExternos/' + this.pdesde + '/' + this.phasta);
  }

}
