import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidacionService} from '../../service/validacion.service';


@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {

  @Input()
  submitted = false;


  //errorMessage: string;
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      // console.log('this.submitted -->'+this.submitted);
      // console.log('this.control.touched-->'+this.control.touched);
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.touched) || this.submitted) {
       // console.log("propertyName",propertyName);
       // console.log("this.control.errors[propertyName]",this.control.errors[propertyName]);
       return ValidacionService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

   ngOnInit() {
  }


}
