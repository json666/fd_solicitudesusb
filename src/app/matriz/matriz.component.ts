import {Component, OnInit} from '@angular/core';
import {ListadoSolicitud} from '../model/response/listado-solicitud';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Router} from '@angular/router';
import {Matriz} from '../model/matriz';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MatrizComponent implements OnInit {


  solicitdudes1: ListadoSolicitud[];
  matriz: Matriz = new Matriz();
  rowGroupMetadata: any;

  constructor(private _service: CorrespondenciaService,
              private router: Router) {
  }

  ngOnInit() {
    let fecha = new Date().getMilliseconds();
    this._service.vistasDetalladas().subscribe(response0 => {
      this.matriz = response0;
      this.updateRowGroupMetaData();
    });


  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.matriz.data) {
      for (let i = 0; i < this.matriz.data.length; i++) {
        let rowData = this.matriz.data[i];
        let brand = rowData.hojaRuta;
        if (i === 0) {
          this.rowGroupMetadata[brand] = {index: 0, size: 1};
        } else {
          let previousRowData = this.matriz.data[i - 1];
          let previousRowGroup = previousRowData.hojaRuta;
          if (brand === previousRowGroup) {
            this.rowGroupMetadata[brand].size++;
          } else {
            this.rowGroupMetadata[brand] = {index: i, size: 1};
          }
        }
      }
    }
  }

}
