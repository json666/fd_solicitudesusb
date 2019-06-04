import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.scss']
})
export class ModalConfirmacionComponent implements OnInit {

  constructor() {
  }

  message: string;

  @ViewChild('modalConfirmacion') public modalConfirmacion: ModalDirective;

  @Output() aceptarModalConfirmacion = new EventEmitter();


  // constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {

  }


  aceptar() {
    this.aceptarModalConfirmacion.emit();
    // this.modalConfirmacion.hide();
  }


  show() {
    // this.modalConfirmacion.show();
  }


  confirm() {
    /*this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmación',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.aceptarModalConfirmacion.emit();
      },
      reject: () => {

      }
    });*/
  }

}
