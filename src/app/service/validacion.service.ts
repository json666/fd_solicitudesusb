import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

//@Injectable()
export class ValidacionService {

  static getValidatorErrorMessage(validatorName:string, validatorValue?:any) {
    let config = {
      'required': 'Este campo es requerido.',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Correo electrónico invalido',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'invalidNumber': 'Introduzca un número valido',
      'invalidAlphanumeric': 'Introduzca solo letras y numeros',
      'invalidDecimal': 'Introduzca un número con o sin decimales',
      'validatePesoNeto': 'El Peso Neto debe ser menor o igual al Peso Brutosss',
      'validateFieldParam': 'El campo es invalido',
      'ageValidator': 'Debe ingresar un año valido',
      'invalidFormatDecimal': 'Introduzca un número con o sin decimales',
      'invalidMaxNumber': 'Por favor, escribe un valor menor o igual a 9999999999.9999',
      'invalidMaxDecimal': 'Numero de decimales debe ser menor o igual a 4'
    };

    return config[validatorName];
  }

  static ageValidator(control) {
    if (control.value !== undefined != null && control.value !== undefined) {
      if (String(control.value).match(/[0-9]{4}/)) {
        return null;
      } else {
        return {'ageValidator': true};
      }
    }
    return null;
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return {'invalidCreditCard': true};
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value !== undefined && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }


  static numberValidator(control) {
    if (control.value != null && control.value != undefined) {
      if (String(control.value).match(/^[0-9]+$/)) {
        return null;
      } else {
        return {'invalidNumber': true};
      }
    }
    return null;
  }

  static alphanumericValidator(control) {
    if (control.value !== undefined != null && control.value !== undefined) {
      if (String(control.value).match(/^[-\w\s]+$/)) {
        return null;
      } else {
        return {'invalidAlphanumeric': true};
      }
    }
    return null;
  }

  static date_ddmmyyyy_hhmm (date) {
    if (date.value != undefined != null && date.value != undefined) {
      if (String(date.value).match(/^(([0-2]?[0-9]|3[0-1])\/([0]?[1-9]|1[0-2])\/[1-2]\d{3}) (20|21|22|23|[0-1]?\d{1}):([0-5]?\d{1})$/)) {
        return null;
      } else {
        return {'invalidDate': true};
      }
    }
    return null;
  }


  static decimalValidator(control) {
    if (control.value != null && control.value != undefined) {
      if (String(control.value).match(/^\d*\.?\d+$/)) {
        //if (control.value.match(/^(?:0|[1-9][0-9]*)\.[0-9]+$/)) {
        return null;
      } else {
        return {'invalidDecimal': true};
      }
    }
    return null;
  }


  static maxDecimalValidator(control) {
    let resp = null;
    if (control.value != null && control.value != "") {
      if (String(control.value).match(/^\d*\.?\d+$/)) {

        let lim = 9999999999.9999;//Valor definido como maximo
        let numDec = 4;
        let num = control.value;//Valor actual de la casilla
        //console.info("TEST_NUMBER:::...", lim - num);
        if (lim >= num) {
          num = num + "";
          let res = num.split(".");
          if (res[1] != undefined)
            if (res[1].length > numDec)
              resp = {'invalidMaxDecimal': true};//Numero de decimales debe ser menor o igual a 4
        } else {
          resp = {'invalidMaxNumber': true};//Por favor, escribe un valor menor o igual a 9999999999.9999
        }
      } else {
        resp = {'invalidFormatDecimal': true}
      }
    }
    return resp;
  }


  static pesoNetoValidator(control) {
    console.log('validator pesoNetoValidator');
    if (control.value != null && control.value != undefined) {
      if (control._parent) {
        console.log('parent', control._parent);
        console.log("peso bruto = ", control._parent._value['datosMercancia.identificacionMercanciaItem.pesoBruto']);
        console.log("control value = ", control.value);
        let pesoBruto:number = control._parent._value['datosMercancia.identificacionMercanciaItem.pesoBruto'];
        if (Number(control.value) > pesoBruto) {
          return {'validatePesoNeto': true};
        }
      }
    }
    return null;
  }


  static pesoNetoValidatorPB(control) {
    console.log('validator pesoNetoValidator');
    if (control.value != null && control.value != undefined) {
      if (control._parent) {
        console.log('parent', control._parent);
        console.log("peso neto = ", control._parent._value['datosMercancia.identificacionMercanciaItem.pesoNeto']);
        console.log("control value = ", control.value);
        let pesoNeto:number = control._parent._value['datosMercancia.identificacionMercanciaItem.pesoNeto'];
        if (Number(pesoNeto) > Number(control.value)) {
          return {'validatePesoNeto': true};
        } else {
          //control._parent.controls['datosMercancia.identificacionMercanciaItem.pesoNeto'].valid();
        }

      }
    }
    return null;
  }


  static fieldParamValidator(control) {
    console.log(control);
    if (control.value != undefined && control.value != undefined && control.value.cod != undefined) {
      return null;
    } else {
      return {'validateFieldParam': true};
    }

  }


}

