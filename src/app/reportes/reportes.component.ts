import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ReporteA} from '../model/reports/reporte-a';
import {ReporteB} from '../model/reports/reporte-b';
import {Parametrica} from '../model/parametrica';
import {DATE} from 'ngx-bootstrap/chronos/units/constants';

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


  constructor(private messageService: MessageService,
              private _serv: CorrespondenciaService) {
    /* this.anios=0;
     for (var i=1900;i++;i<=2040) {
         this.anios= this.anios+i;
     }*/

    /*this.data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Internos',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [100, 30, 25, 80, 56, 55, 40, 10, 30, 25, 80, 56]
        },
        {
          label: 'Externos',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 60]
        }
      ]
    };*/
    /* this.data1 = {
       labels: ['ASISTENCIA FAMILIAR', 'ASISTENCIA ACADEMICA', 'VIOLENCIA FAMILIAR',
         'TRAFICO DE DROGRAS', 'MALTRATO PSICOLOGICO', 'INCENDIO PROVOCADO',
         'ASISTENCIA PENAL', 'ASISTENCIA LABORAL'],
       datasets: [
         {
           data: [35, 20, 20, 5, 3, 9, 2, 4],
           backgroundColor: [
             '#FF6384',
             '#36A2EB',
             '#FFCE56',
             '#7CB342',
             '#7f00ff',
             '#ff2800',
             '#ff0066',
             '#808080'
           ],
           hoverBackgroundColor: [
             '#FF6384',
             '#36A2EB',
             '#FFCE56',
             '#7CB342',
             '#7f00ff',
             '#ff2800',
             '#ff0066',
             '#808080'
           ]
         }]
     };*/
    this.data3 = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre','Diciembre'],
      datasets: [
        {
          label: 'Mujeres',
          data: [65, 59, 80, 81, 56, 55, 40, 90, 45, 10,23,52],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Hombres',
          data: [28, 48, 40, 19, 86, 27, 90, 12, 10, 15,45,41],
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
    this._serv.obtieneDatosEstadisticosA(dt.getFullYear(), '').subscribe(response => {
      this.data = response;
    });

    this._serv.obtieneDatosEstadisticosB(dt.getFullYear(), '').subscribe(response => {
      this.data1 = response;
      this.loading = false;
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

    /*this._serv.obtieneDatosEstadisticosC().subscribe(response => {
      this.data4 = response;
      this.loading = false;
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
    };*/
    // this.cargarAnios();
  }

  selectData(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Data Selected',
      'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]
    });
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
    this._serv.obtieneDatosEstadisticosA(aniio, mes).subscribe(response => {
      this.data = response;
    });
    this._serv.obtieneDatosEstadisticosB(aniio, mes).subscribe(response => {
      this.data1 = response;
      this.loading = false;
    });
  }

}
