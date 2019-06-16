import { AgendamentoService } from './../../service/agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  agendamentos = [];

  constructor(private agendamentoService :AgendamentoService) { }

  ngOnInit() {
  }

}
