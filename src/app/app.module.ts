import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRouting} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsComponent} from './forms/forms.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {TablesComponent} from './tables/tables.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {AlertsComponent} from './alerts/alerts.component';
import {AccordionsComponent} from './accordions/accordions.component';
import {BadgesComponent} from './badges/badges.component';
import {ProgressbarComponent} from './progressbar/progressbar.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {PaginationComponent} from './pagination/pagination.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {TooltipsComponent} from './tooltips/tooltips.component';
import {CarouselComponent} from './carousel/carousel.component';
import {TabsComponent} from './tabs/tabs.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ConsultasCorrespondenciaComponent} from './consultas-correspondencia/consultas-correspondencia.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistroInternoComponent} from './registro-interno/registro-interno.component';
import {LoadingIndicatorComponent} from './component/loading-indicator/loading-indicator.component';
import {RegistroExternoComponent} from './registro-externo/registro-externo.component';
import {SolicitudExternaComponent} from './solicitud-externa/solicitud-externa.component';
import {AsignarSolicitudComponent} from './asignar-solicitud/asignar-solicitud.component';
import {ReportesComponent} from './reportes/reportes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart';
import {ConfirmDialogModule, DataTableModule, FileUploadModule, MessageService} from 'primeng/primeng';
import {ModificaSoliExternaComponent} from './modifica-soli-externa/modifica-soli-externa.component';
import {MatrizComponent} from './matriz/matriz.component';
import {ControlMessagesComponent} from './component/control-messages';
import {TableModule} from 'primeng/table';
import {ModSolicitudInternaComponent} from './mod-solicitud-interna/mod-solicitud-interna.component';
import {HistoricoComponent} from './historico/historico.component';
import {AnularSolicitudComponent} from './anular-solicitud/anular-solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    HomeComponent,
    LoginComponent,
    ConsultasCorrespondenciaComponent,
    RegistroInternoComponent,
    LoadingIndicatorComponent,
    RegistroExternoComponent,
    SolicitudExternaComponent,
    AsignarSolicitudComponent,
    ReportesComponent,
    ModificaSoliExternaComponent,
    MatrizComponent,
    ControlMessagesComponent,
    ModSolicitudInternaComponent,
    HistoricoComponent,
    AnularSolicitudComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartModule,
    DataTableModule,
    TableModule,
    FileUploadModule,
    ConfirmDialogModule,
    NgbModule,
    NgbModule.forRoot(),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
