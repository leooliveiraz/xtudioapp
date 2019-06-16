import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { 
    MzNavbarModule,
    MzIconModule, 
    MzIconMdiModule,
    MzSidenavModule, 
    MzButtonModule,
    MzInputModule,
    MzCollectionModule,
    MzToastModule,
    MzDatepickerModule,
    MzTimepickerModule,
    MzProgressModule,
    MzCardModule ,
    MzSelectModule  } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ServicoComponent } from './views/servico/servico.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { FormaPagamentoComponent } from './views/forma-pagamento/forma-pagamento.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PainelComponent } from './views/painel/painel.component';
import { ServicoFormComponent } from './views/servico-form/servico-form.component';
import { FormaPagamentoFormComponent } from './views/forma-pagamento-form/forma-pagamento-form.component';
import { FuncionarioFormComponent } from './views/funcionario-form/funcionario-form.component';
import { AgendamentoFormComponent } from './views/agendamento-form/agendamento-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicoComponent,
    AgendamentoComponent,
    FormaPagamentoComponent,
    FuncionarioComponent,
    PainelComponent,
    ServicoFormComponent,
    FormaPagamentoFormComponent,
    FuncionarioFormComponent,
    AgendamentoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzIconModule,
    MzIconMdiModule,
    MzSidenavModule,
    MzButtonModule,
    MzInputModule,
    MzCollectionModule,
    MzToastModule,
    MzDatepickerModule,
    MzCardModule,
    MzTimepickerModule,
    MzProgressModule,
    MzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
