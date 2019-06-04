import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  template: 'template: `<div id="loading-div-background" style="position: fixed;\n' +
    '    top: 0;left: 0; background: black; opacity: 0.7; width: 100%;\n' +
    '    height: 100%; z-index: 1000; background: rgba(0, 0, 0, 0.40);\n' +
    '    filter: alpha(opacity=50);"><div id="loading-div" style="text-align: \n' +
    '    center; color:#ffffff; margin-top:200px"><h5>Cargando...</h5> <i class="fa fa-spinner fa-spin" aria-hidden="true" style="font-size:24px;"></i>\n' +
    '    </div></div>'
})
export class LoadingIndicatorComponent{

}
