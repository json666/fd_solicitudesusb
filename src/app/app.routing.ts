import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {ButtonsComponent} from './buttons/buttons.component';
import {TablesComponent} from './tables/tables.component';
import {IconsComponent} from './icons/icons.component';
import {RegistroCorrespondenciaComponent} from './registro-correspondencia/registro-correspondencia.component';
import {ConsultasCorrespondenciaComponent} from './consultas-correspondencia/consultas-correspondencia.component';
import {RegistroInternoComponent} from './registro-interno/registro-interno.component';
import {RegistroExternoComponent} from './registro-externo/registro-externo.component';
import {SolicitudExternaComponent} from './solicitud-externa/solicitud-externa.component';
import {AsignarSolicitudComponent} from './asignar-solicitud/asignar-solicitud.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportesComponent} from './reportes/reportes.component';
import {TypographyComponent} from './typography/typography.component';
import {ModificaSoliExternaComponent} from './modifica-soli-externa/modifica-soli-externa.component';
import {MatrizComponent} from './matriz/matriz.component';
import {ModSolicitudInternaComponent} from './mod-solicitud-interna/mod-solicitud-interna.component';
import {HistoricoComponent} from './historico/historico.component';
import {AnularSolicitudComponent} from './anular-solicitud/anular-solicitud.component';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children : [
    { path: '', redirectTo: 'app-dashboard', pathMatch: 'full'},
    { path: 'consulta-correspondencia', component: ConsultasCorrespondenciaComponent },
    { path: 'registro-correspondencia', component: RegistroCorrespondenciaComponent },
    { path: 'app-solicitud-externa', component: SolicitudExternaComponent },
    { path: 'mod-solicitud-externa/:id', component: ModificaSoliExternaComponent },
    { path: 'registro-interno', component: RegistroInternoComponent },
    { path: 'registro-externo', component: RegistroExternoComponent },
    { path: 'mod-solicitud-interna/:id', component: ModSolicitudInternaComponent },
    { path: 'historico', component: HistoricoComponent },
    { path: 'app-dashboard', component: DashboardComponent },
    { path: 'app-reportes', component: ReportesComponent },
    { path: 'app-asignar-solicitud', component: AsignarSolicitudComponent },
    { path: 'app-matriz', component: MatrizComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'app-anular', component: AnularSolicitudComponent }
    // { path: 'icons', component: TypographyComponent }
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
