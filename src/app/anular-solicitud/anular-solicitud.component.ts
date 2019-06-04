import {Component, OnInit} from '@angular/core';
import {Estados} from '../model/estados';
import {ActivatedRoute, Router} from '@angular/router';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {ParametricaService} from '../service/parametrica.service';
import {Revisiones} from '../model/revisiones';

@Component({
  selector: 'app-anular-solicitud',
  templateUrl: './anular-solicitud.component.html',
  styleUrls: ['./anular-solicitud.component.scss']
})
export class AnularSolicitudComponent implements OnInit {


  listaEstados: Array<Estados> = new Array<Estados>();
  revisiones: Revisiones;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _serv: CorrespondenciaService,
              private _param: ParametricaService) {
  }

  ngOnInit() {
    this.revisiones = new Revisiones();
    this._serv.estadosSolicitud().subscribe(response => {
      this.listaEstados = response;
    });


    this.route.params.subscribe(params => {
      const id = params['id'];
      setTimeout(() => {
        this._serv.cargarDatosSolicitud(id).subscribe(response => {
        });
      }, 3000);
    });
  }

}
