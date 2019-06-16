import { AgendamentoFormComponent } from './../views/agendamento-form/agendamento-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormaPagamentoComponent } from '../views/forma-pagamento/forma-pagamento.component';
import { FuncionarioComponent } from '../views/funcionario/funcionario.component';
import { AgendamentoComponent } from '../views/agendamento/agendamento.component';
import { ServicoComponent } from '../views/servico/servico.component';
import { PainelComponent } from '../views/painel/painel.component';
import { ServicoFormComponent } from '../views/servico-form/servico-form.component';
import { FormaPagamentoFormComponent } from '../views/forma-pagamento-form/forma-pagamento-form.component';
import { FuncionarioFormComponent } from '../views/funcionario-form/funcionario-form.component';

const appRoutes: Routes = [
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'agendamento/form',      component: AgendamentoFormComponent },
  { path: 'agendamento/form/:id',      component: AgendamentoFormComponent },
  { path: 'formapagamento',      component: FormaPagamentoComponent },
  { path: 'formapagamento/form',      component: FormaPagamentoFormComponent },
  { path: 'formapagamento/form/:id',      component: FormaPagamentoFormComponent },
  { path: 'funcionario',      component: FuncionarioComponent },
  { path: 'funcionario/form',      component: FuncionarioFormComponent },
  { path: 'funcionario/form/:id',      component: FuncionarioFormComponent },
  { path: 'servico',      component: ServicoComponent },
  { path: 'servico/form',      component: ServicoFormComponent },
  { path: 'servico/form/:id',      component: ServicoFormComponent },
  { path: 'painel', component: PainelComponent },
  { path: '', pathMatch: 'full', redirectTo: 'painel' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
